import LoadingCards from "@/components/card/LoadingCards";
import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import { Suspense } from "react";

interface HomePageProps {
  searchParams: {
    category?: string;
    search?: string;
  };
}

const HomePage = ({ searchParams: { category, search } }: HomePageProps) => {
  return (
    <section>
      <CategoriesList category={category} search={search} />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer category={category} search={search} />
      </Suspense>
    </section>
  );
};
export default HomePage;
