import { fetchProperties } from "@/utils/actions";
import PropertiesList from "@/components/home/PropertiesList";
import EmptyList from "@/components/home/EmptyList";
import type { PropertyCardProps } from "@/utils/types";

interface PropertiesContainerProps {
  category?: string;
  search?: string;
}

const PropertiesContainer = async ({
  category,
  search,
}: PropertiesContainerProps) => {
  const properties: PropertyCardProps[] = await fetchProperties({
    category,
    search,
  });

  if (properties.length === 0) {
    return (
      <EmptyList
        heading="No results."
        message="Try changing or removing some of your filters."
        btnText="Clear Filters"
      />
    );
  }

  return <PropertiesList properties={properties} />;
};

export default PropertiesContainer;
