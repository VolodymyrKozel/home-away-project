import { deleteRentalAction } from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Buttons";

interface DeleteRentalProps {
  propertyId: string;
}
const DeleteRental = ({ propertyId }: DeleteRentalProps) => {
  const deleteRental = deleteRentalAction.bind(null, { propertyId });
  return (
    <FormContainer action={deleteRental}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
};

export default DeleteRental;
