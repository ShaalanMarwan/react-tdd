import { InvalidFiledError } from "@/validation/errors/invalid-field-error";
import { MinLengthValidation } from "./min-length-validation";
import faker from "faker";

const makeSut = (): MinLengthValidation =>
  new MinLengthValidation(faker.database.column(), 5);

describe("MinLengthValidation", () => {
  test("should return error if value is invalid", () => {
    const sut = makeSut( );
    const error = sut.validate(faker.random.alphaNumeric(4));
    expect(error).toEqual(new InvalidFiledError());
  });
  test("should return falsy if value is valid", () => {
    const sut = makeSut();
    const error = sut.validate(faker.random.alphaNumeric(4));
    expect(error).toBeFalsy();
  });
});
