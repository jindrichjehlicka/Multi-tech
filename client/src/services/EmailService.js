import Api from '@/services/Api'

export default {


  post(name, company, email, phone, subject, message) {
    return Api().post('send', name, company, email, phone, subject, message)
  },

}
