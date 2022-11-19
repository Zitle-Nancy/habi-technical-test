export interface IUserInformation {
  name: string;
  email: string;
  address: string;
}

export interface IUserInfoContext {
  //TODO revisar los tipos
  userInformation: IUserInformation;
  setUserInformation: (value: string) => void;
}
