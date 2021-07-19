import { RemoteAuthentication } from './remote-authentication'
import faker from 'faker'
import { HttpPostClientSpy } from '@/data/test/'
// import { HttpStatusCode } from '@/data/protocols/http/http-response'
// import { InvalidCredentialError } from '@/domain/error/invalid-credential-error'
import { mockAuthentication } from '@/domain/test/'
// import { UnexpectedError } from '@/domain/error/unexpected-error'
import { AuthenticationParams } from '@/domain/usecases/'
import { AccountModel } from '@/domain/models/'

type SutTypes={
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy<AuthenticationParams, AccountModel>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<AuthenticationParams, AccountModel>()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpClient with correct Url', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    // eslint-disable-next-line no-void
    await sut.auth(mockAuthentication())
    expect(httpPostClientSpy.url).toBe(url)
  })
  test('Should call HttpClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    // eslint-disable-next-line no-void
    const authenticationParams = mockAuthentication()
    await sut.auth(authenticationParams)
    expect(httpPostClientSpy.body).toEqual(authenticationParams)
  })
  // test('Invalid Credential if http response code is 401', async () => {
  //   const { sut, httpPostClientSpy } = makeSut()
  //   httpPostClientSpy.response = {
  //     statusCode: HttpStatusCode.unauthorized
  //   }
  //   const promise = await sut.auth(mockAuthentication())
  //   await expect(promise).rejects.toThrow(new InvalidCredentialError())
  // })
  // test('UnexpectedError if http response code is 401', async () => {
  //   const { sut, httpPostClientSpy } = makeSut()
  //   httpPostClientSpy.response = {
  //     statusCode: HttpStatusCode.badRequest
  //   }
  //   const promise = await sut.auth(mockAuthentication())
  //   await expect(promise).rejects.toThrow(new UnexpectedError())
  // })
})
