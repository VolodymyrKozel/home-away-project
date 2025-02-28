import EmptyList from "@/components/home/EmptyList";
import PropertiesList from "@/components/home/PropertiesList";
import { fetchFavorites } from "@/utils/actions";

interface FavoritesPageProps {
  searchParams: {
    search?: string;
  };
}

const FavoritesPage = async ({
  searchParams: { search },
}: FavoritesPageProps) => {
  const favorites = await fetchFavorites({ search });

  return favorites.length === 0 ? (
    <EmptyList />
  ) : (
    <PropertiesList properties={favorites} />
  );
};

export default FavoritesPage;
