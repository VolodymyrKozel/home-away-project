import Image from "next/image";
import Link from "next/link";
import CountryFlagAndName from "@/components/card/CountryFlagAndName";
import PropertyRating from "@/components/card/PropertyRating";
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import { PropertyCardProps } from "@/utils/types";
import { formatCurrency } from "@/utils/format";

const PropertyCard = ({
  property: { id: propertyId, name, image, country, price, tagline },
}: {
  property: PropertyCardProps;
}) => {
  return (
    <article className="group relative">
      <Link href={`/properties/${propertyId}`}>
        <div className="relative h-[300px] mb-2 overflow-hidden rounded-md">
          <Image
            src={image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            alt={name}
            className="rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold mt-1">
            {name.substring(0, 30)}
          </h3>
          {/* property rating */}
          <PropertyRating propertyId={propertyId} inPage={false} />
        </div>
        <p className="text-sm mt-1 text-muted-foreground ">
          {tagline.substring(0, 40)}
        </p>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm mt-1 ">
            <span className="font-semibold">{formatCurrency(price)} </span>
            night
          </p>
          {/* country and flag */}
          <CountryFlagAndName countryCode={country} />
        </div>
      </Link>
      <div className="absolute top-5 right-5 z-5">
        {/* favorite toggle button */}
        <div className="absolute top-5 right-5 z-5">
          <FavoriteToggleButton propertyId={propertyId} />
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
