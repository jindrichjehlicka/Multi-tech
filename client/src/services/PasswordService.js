/* eslint-disable */
import Api from '@/services/Api'

export default {


  put(user) {
    return Api().put(`password/${user.id}`, user)
  }
}
