export interface IDataForm {
  name: string;
  placeholder: string;
  label: string;
  nextPath: string;
  type?: string;
}

export interface IInputValues {
  [key: string]: IDataForm;
}
