/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';


Vue.use(Vuex); 

export default new Vuex.Store({
  strict: true,
 
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 1, secure: false}),
        //expires in one day
        //secure is set to false, since it's running on local host 
        removeItem: key => Cookies.remove(key)
      }
    })
  ],
  mutations: {
    setToken(state, token) {
      state.token = token;
      if (token) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    setToken({
      commit
    }, token) {
      commit('setToken', token);
    },
    setUser({
      commit
    }, user) {
      commit('setUser', user);
    },
  },

  getters: {
 
 
    user (state) {
      return state.user
    },
 
    error (state) {
      return state.error
    }
  }
  
})

