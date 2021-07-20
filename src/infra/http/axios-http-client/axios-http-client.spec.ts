import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import { mockPostRequest } from '@/data/test'
import { mockAxios } from '@/infra/test/index'
jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}
const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  test('should call axios with correct values ', async () => {
    const request = mockPostRequest()

    const { sut, mockedAxios } = makeSut()
    await sut.post(request)
    expect(mockedAxios).toHaveBeenCalledWith(request.url, request.body)
  })
  test('should call axios with correct statusCode and body ', () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostRequest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
