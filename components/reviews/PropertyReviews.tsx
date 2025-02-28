import { fetchPropertyReviews } from "@/utils/actions";
import Title from "@/components/properties/Title";
import ReviewCard from "@/components/reviews/ReviewCard";

interface ReviewCardProps {
  propertyId: string;
}
const PropertyReviews = async ({ propertyId }: ReviewCardProps) => {
  const reviews = await fetchPropertyReviews(propertyId);
  if (reviews.length < 1) return null;
  return (
    <div className="mt-8">
      <Title text="Reviews" />
      <div className="grid md:grid-cols-2 gap-8 mt-4 ">
        {reviews.map(
          ({
            id,
            comment,
            rating,
            profile: { profileImage: image, firstName: name },
          }) => {
            const reviewInfo = {
              comment,
              rating,
              name,
              image,
            };
            return <ReviewCard key={id} reviewInfo={reviewInfo} />;
          }
        )}
      </div>
    </div>
  );
};
export default PropertyReviews;
