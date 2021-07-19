import { HttpResponse } from '.'

export type HttpPostClientParams<T>={
  url: string
  body?: T
}

export interface HttpPostClient<T, R> {
  post: (params: HttpPostClientParams<T>) => Promise<HttpResponse<R>>
  //   get: (url: string) => Promise<void>
}
