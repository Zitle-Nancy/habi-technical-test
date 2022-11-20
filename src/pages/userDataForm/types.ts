export interface IUserDataForm {
  name: string; // este name es del input
  placeholder: string;
  label: string;
  nextPath: string;
}

export interface IInputValues {
  [key: string]: IUserDataForm;
}
