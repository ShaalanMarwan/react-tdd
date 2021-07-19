export class InvalidCredentialError extends Error {
  constructor () {
    super('Invalid Credential')
    this.name = 'Invalid Credential Error'
  }
}
