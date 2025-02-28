"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className = "",
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        root: "rounded-xl border",
        months: "relative",
        month: "flex flex-col",
        // caption
        month_caption: "flex justify-center items-center h-10",
        // caption_label
        caption_label: "text-sm font-medium",
        // nav
        nav: "absolute top-0 w-full flex items-center justify-between",
        // nav_button_previous
        button_previous: cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "w-7 h-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        // nav_button_next
        button_next: cn(
          "w-7 h-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          buttonVariants({ variant: "outline", size: "icon" })
        ),
        // table to month grid
        month_grid: "w-full border-collapse",
        //head_row
        weekdays: "flex",
        //head_cell
        weekday:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        //row
        week: "flex w-full",
        //cell
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100",
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        //day_range_start
        range_start: "day-range-start",
        //day_range_end
        range_end: "day-range-end",
        //day_selected
        selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        //day_today
        today: "bg-accent text-accent-foreground",
        //day_outside
        outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        //day_disabled
        disabled: "text-muted-foreground opacity-50",
        //day_range_middle
        range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        //day_hidden
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          const Icon = orientation === "left" ? ChevronLeft : ChevronRight;
          return <Icon className="h-4 w-4" />;
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
