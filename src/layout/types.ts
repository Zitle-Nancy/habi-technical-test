// TODO add the amenities values
export interface IAmenities {
  [key: string]: boolean | string;
}
export interface IUserInformation {
  fullName: string;
  email: string;
  address: string;
  floorNumber: string;
  amenities?: IAmenities;
}

export interface IUserInfoContext {
  userInformation: IUserInformation;
  setUserInformation: (value: IUserInformation) => void;
}
