export interface HttpPostClient {
  post: (url: string) => Promise<void>
  //   get: (url: string) => Promise<void>
}
