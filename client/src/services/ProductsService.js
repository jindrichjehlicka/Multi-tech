/* eslint-disable */
import Api from '@/services/Api'

export default {
    index() {
        return Api().post('products')
    }
}

