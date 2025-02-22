import EmptyList from "@/components/home/EmptyList";
import PropertiesList from "@/components/home/PropertiesList";
import { fetchFavorites } from "@/utils/actions";

const FavoritesPage = async () => {
  const favorites = await fetchFavorites();

  return favorites.length === 0 ? (
    <EmptyList />
  ) : (
    <PropertiesList properties={favorites} />
  );
};

export default FavoritesPage;
