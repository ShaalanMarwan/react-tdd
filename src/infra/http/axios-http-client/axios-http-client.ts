import { HttpPostClient, HttpPostClientParams, HttpResponse } from '@/data/protocols/http'
import axios from 'axios'
export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post (params: HttpPostClientParams<any>): Promise<HttpResponse<any>> {
    console.debug(await axios(params.url, params.body))
    const httpResponse = await axios(params.url, params.body)
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
