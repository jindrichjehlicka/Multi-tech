import Api from '@/services/Api'

export default {
   
   
    post(name,company,email,phone, message) {
        return Api().post('send',name,company,email,phone, message)
    },
    
}

