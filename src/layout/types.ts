export interface IUserInformation {
  name: string;
  email: string;
  address: string;
}

export interface IUserInfoContext {
  userInformation: IUserInformation;
  setUserInformation: (value: IUserInformation) => void;
}
