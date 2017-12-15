/* eslint-disable */
import Api from '@/services/Api'

export default {
  // index (search) {
  //     return Api().get('manuals',{
  //         params: {
  //             search: search
  //         }
  //     })
  // },
  index(manual) {
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
