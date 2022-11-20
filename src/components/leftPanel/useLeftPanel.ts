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
      console.log(amenityAvailable, "amenityAvailable");

      console.log(amenities && "el booleano de" + amenities[amenityAvailable]);

      return (
        amenities &&
        amenities[amenityAvailable] !== false &&
        amenities[amenityAvailable] !== undefined
      );
    }
  );
  return {
    availableAmenities,
  };
};
