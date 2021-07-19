export class UnexpectedError extends Error {
  constructor () {
    super('Unexpected Error')
    this.name = 'Unexpected Error'
  }
}
