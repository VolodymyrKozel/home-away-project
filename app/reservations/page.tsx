import { fetchReservations } from "@/utils/actions";
import Link from "next/link";
import EmptyList from "@/components/home/EmptyList";
import CountryFlagAndName from "@/components/card/CountryFlagAndName";

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
import Pagination from "@/components/shared/Pagination";

interface ReservationsPageProps {
  searchParams: {
    page: string;
  };
}

const ReservationsPage = async ({
  searchParams: { page },
}: ReservationsPageProps) => {
  const { reservations, totalPages } = await fetchReservations(
    Number(page) || 1
  );

  const tableHeader = [
    "Property Name",
    "Country",
    "Nights",
    "Total",
    "Check In",
    "Check Out",
  ];

  if (reservations.length === 0) {
    return <EmptyList />;
  }

  return (
    <div className="mt-16">
      <h4 className="mb-4 capitalize">
        total reservations : {reservations.length}
      </h4>
      <Table>
        <TableCaption>A list of your recent reservations.</TableCaption>
        <TableHeader>
          <TableRow>
            {tableHeader.map((item) => (
              <TableHead key={item}>{item}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {reservations.map((item) => {
            const { id, orderTotal, totalNights, checkIn, checkOut } = item;
            const { id: propertyId, name, country } = item.property;
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
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="mt-4">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};
export default ReservationsPage;
