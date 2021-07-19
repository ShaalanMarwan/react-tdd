import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http/'
import { Authentication, AuthenticationParams } from '@/domain/usecases/authentication'
import { InvalidCredentialError, UnexpectedError } from '@/domain/error/'
import { AccountModel } from '@/domain/models/'
export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly HttpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) {}

  async auth (params: AuthenticationParams): Promise<any> {
    const httpResponse = await this.HttpPostClient.post({ url: this.url, body: params })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialError()
      default:
        throw new UnexpectedError()
    }
  }
}
