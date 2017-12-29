/* eslint-disable */
import axios from 'axios'
//hitting backend req/res
import store from '@/store/store'
//import token from the store

export default () => {
  return axios.create({
    baseURL: `http://localhost:8081`,
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }

  })
}
