import Api from '@/services/Api'

export default {


  post(id,email,mine) {
    return Api().post('email',id,email, mine)
  },

}
