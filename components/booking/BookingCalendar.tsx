"use client";
import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { DateRange } from "react-day-picker";
import { useProperty } from "@/utils/store";

import {
  generateDisabledDates,
  generateDateRange,
  defaultSelected,
  generateBlockedPeriods,
  isRangeBlocked,
} from "@/utils/calendar";

const BookingCalendar = () => {
  const { toast } = useToast();
  const currentDate = new Date();

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  useEffect(() => {
    useProperty.setState({ range });
  }, [range]);

  const bookings = useProperty((state) => state.bookings);
  const blockedPeriods = generateBlockedPeriods({
    bookings,
    today: currentDate,
  });

  const handleSelect = (range: DateRange | undefined) => {
    /*     if (isRangeBlocked(range, bookings)) {
      setRange(defaultSelected);
      toast({
        description: "This date range is not available.",
      });
      return;
    } */
    setRange(range);
  };

  return (
    <Calendar
      mode="range"
      defaultMonth={currentDate}
      selected={range}
      onSelect={handleSelect}
      className="mb-4"
      disabled={blockedPeriods}
      excludeDisabled
    />
  );
};
export default BookingCalendar;
