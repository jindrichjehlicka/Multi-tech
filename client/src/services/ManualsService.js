/* eslint-disable */
import Api from '@/services/Api'

export default {
     index (manual) {
        return Api().get('manuals', {
            params: manual
        })
    },
    post (manual) {
        return Api().post('manuals', manual)
    },
    delete (manualId) {
        return Api().delete(`manuals/${manualId}`)
    },

}

