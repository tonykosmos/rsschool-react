export interface CountriesListItem {
  code: string;
  name: string;
}

export interface FormDataType {
  name?: string;
  age?: number;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  accept?: boolean;
  country?: string;
}

export interface ValidationErrorsObj {
  name?: string;
  age?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  accept?: string;
  country?: string;
}
