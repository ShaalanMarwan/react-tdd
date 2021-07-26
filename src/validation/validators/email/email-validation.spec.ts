import { InvalidFiledError } from "@/validation/errors/invalid-field-error";
import { EmailValidation } from "./email-validation";
import faker from "faker";

const makeSut = (): EmailValidation => new EmailValidation(faker.database.column());
describe("EmailValidation", () => {
  test("should return error if email is invalid", () => {
    const sut = makeSut()
    const error = sut.validate(faker.internet.email());
    expect(error).toBeFalsy();
  });
  test("should return falsy if email is valid", () => {
    const sut = makeSut()
    const error = sut.validate(faker.internet.email());
    expect(error).toBeFalsy();
  });
});
