import { deleteBookingAction } from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Buttons";

interface DeleteBookingProps {
  bookingId: string;
}

const DeleteBooking = ({ bookingId }: DeleteBookingProps) => {
  const deleteBooking = deleteBookingAction.bind(null, { bookingId });
  return (
    <FormContainer action={deleteBooking}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
};

export default DeleteBooking;
