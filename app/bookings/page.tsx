import EmptyList from "@/components/home/EmptyList";
import CountryFlagAndName from "@/components/card/CountryFlagAndName";
import Link from "next/link";

import { formatDate, formatCurrency } from "@/utils/format";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { fetchBookings } from "@/utils/actions";
import DeleteBooking from "@/components/booking/DeleteBooking";

const BookingsPage = async () => {
  const bookings = await fetchBookings();
  if (bookings.length === 0) {
    return <EmptyList />;
  }

  const tableHead = [
    "Property Name",
    "Country",
    "Nights",
    "Total",
    "Check In",
    "Check Out",
    "Actions",
  ];

  return (
    <div className="mt-16">
      <h4 className="mb-4 capitalize">total bookings : {bookings.length}</h4>
      <Table>
        <TableCaption>A list of your recent bookings.</TableCaption>
        <TableHeader>
          <TableRow>
            {tableHead.map((head) => (
              <TableHead key={head}>{head}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map(
            ({
              id,
              orderTotal,
              totalNights,
              checkIn,
              checkOut,
              property: { name, country, id: propertyId },
            }) => {
              const startDate = formatDate(checkIn);
              const endDate = formatDate(checkOut);
              return (
                <TableRow key={id}>
                  <TableCell>
                    <Link
                      href={`/properties/${propertyId}`}
                      className="underline text-muted-foreground tracking-wide">
                      {name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <CountryFlagAndName countryCode={country} />
                  </TableCell>
                  <TableCell>{totalNights}</TableCell>
                  <TableCell>{formatCurrency(orderTotal)}</TableCell>
                  <TableCell>{startDate}</TableCell>
                  <TableCell>{endDate}</TableCell>
                  <TableCell>
                    <DeleteBooking bookingId={id} />
                  </TableCell>
                </TableRow>
              );
            }
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default BookingsPage;
