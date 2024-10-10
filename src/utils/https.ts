import axios from 'axios'
import { pickBy } from 'lodash-es'

const baseURL = ''

const instance = axios.create({
  baseURL,
  timeout: 60000
})

export async function httpGet(url: string, params?: any) {
  try {
    const res = await instance.get(url, {
      params: pickBy(params)
    })
    return res?.data || {}
  } catch (error) {
    return error
  }
}

export async function httpPost(url: string, params?: any) {
  try {
    const res = await instance.post(url, pickBy(params), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res?.data || {}
  } catch (error) {
    return error
  }
}
