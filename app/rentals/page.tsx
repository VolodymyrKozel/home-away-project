import EmptyList from "@/components/home/EmptyList";
import { fetchRentals } from "@/utils/actions";
import Link from "next/link";

import { formatCurrency } from "@/utils/format";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import FormContainer from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Buttons";
import DeleteRental from "@/components/rental/DeleteRental";

const tableHead = [
  "Property Name",
  "Nightly Rate",
  "Nights Booked",
  "Total Income",
  "Actions",
];

const RentalsPage = async () => {
  const rentals = await fetchRentals();

  if (rentals.length === 0) {
    return (
      <EmptyList
        heading="No rentals to display."
        message="Don't hesitate to create a rental."
      />
    );
  }

  return (
    <div className="mt-16">
      <h4 className="mb-4 capitalize">Active Properties : {rentals.length}</h4>
      <Table>
        <TableCaption>A list of all your properties.</TableCaption>
        <TableHeader>
          <TableRow>
            {tableHead.map((head) => (
              <TableHead key={head}>{head}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rentals.map(
            ({
              id: propertyId,
              name,
              price,
              totalNightsSum,
              orderTotalSum,
            }) => {
              return (
                <TableRow key={propertyId}>
                  <TableCell>
                    <Link
                      href={`/properties/${propertyId}`}
                      className="underline text-muted-foreground tracking-wide">
                      {name}
                    </Link>
                  </TableCell>
                  <TableCell>{formatCurrency(price)}</TableCell>
                  <TableCell>{totalNightsSum || 0}</TableCell>
                  <TableCell>{formatCurrency(orderTotalSum)}</TableCell>

                  <TableCell className="flex items-center gap-x-2">
                    <Link href={`/rentals/${propertyId}/edit`}>
                      <IconButton actionType="edit"></IconButton>
                    </Link>
                    <DeleteRental propertyId={propertyId} />
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

export default RentalsPage;
