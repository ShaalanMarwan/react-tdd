import {
  RequiredFieldValidation,
  EmailValidation,
} from "@/validation/validators";
import { MinLengthValidation } from "../min-length/min-length-validation";
import { ValidationBuilder as sut } from "./validation-builder";
import faker from "faker";
describe("ValidationBuilder", () => {
  test("Should return RequiredFieldValidation", () => {
    const fieldName = faker.database.column();
    const validations = sut.field(fieldName).required().build();
    expect(validations).toEqual([new RequiredFieldValidation(fieldName)]);
  });
  test("Should return EmailValidation", () => {
    const fieldName = faker.database.column();

    const validations = sut.field(fieldName).email().build();
    expect(validations).toEqual([new EmailValidation(fieldName)]);
  });
  test("Should return MinLengthValidation", () => {
    const fieldName = faker.database.column();
    const length = faker.datatype.number();
    const validations = sut.field(fieldName).min(length).build();
    expect(validations).toEqual([new MinLengthValidation(fieldName, length)]);
  });
  test("Should return list of validation", () => {
    const fieldName = faker.database.column();
    const length = faker.datatype.number();

    const validations = sut.field(fieldName).required().min(length).email().build();
    expect(validations).toEqual([
      new RequiredFieldValidation(fieldName),
      new MinLengthValidation(fieldName, length),
      new EmailValidation(fieldName),
    ]);
  });
});
