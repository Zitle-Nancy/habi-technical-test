import { IAmenities } from "../../layout/types";
import { AmenitiesEnum } from "../../pages/amenitiesForm/types";

const TYPE_OF_AMENITIES = [
  AmenitiesEnum.ONE,
  AmenitiesEnum.TWO,
  AmenitiesEnum.THREE,
];

export const useLeftPanel = (amenities: IAmenities | undefined) => {
  const availableAmenities = TYPE_OF_AMENITIES.filter(
    (amenityAvailable: string) => {
      return amenities && amenities[amenityAvailable] !== false;
    }
  );
  return {
    availableAmenities,
  };
};
