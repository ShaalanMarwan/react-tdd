import { Validation } from "../protocols/validation";

export class ValidationSpy implements Validation {
    errorMessage: string;
    filedName: string;
    filedValue: string;
    validate(filedName: string, filedValue: string): string {
      this.filedName = filedName;
      this.filedValue = filedValue;
      return this.errorMessage;
    }
  }
  