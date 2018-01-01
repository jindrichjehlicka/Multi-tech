/* eslint-disable */
import Api from '@/services/Api'

export default {

  index(manual) {
    return Api().get('manual', {
      params: manual
    })
  },
  getall(manual) {
    return Api().get('manuals', {
      params: manual
    })
  },
  show(manualId) {
    return Api().get(`manuals/${manualId}`)
  },
  post(manual) {
    return Api().post('manuals', manual)
  },
  delete(manualId) {
    return Api().delete(`manuals/${manualId}`)
  },

}
