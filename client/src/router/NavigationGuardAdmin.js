import store from '../store/store'


export default (to, from, next) => {
  if (store.getters.user.admin === 1) {
    next()
  } else {
    next(false)
    //resets to the from route, if user is not admin
  }
}