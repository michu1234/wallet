import ls from 'local-storage'
import store from 'src/store'
import router from 'src/router'
import { STORAGE_AUTH_TOKEN } from 'src/constants'
import api from 'src/services/api'

const state = {
  moneyData: ""
}

const getters = {
  isLoggedIn: state => state.isLoggedIn,
}

const mutations = {
  LOGIN(state) {
    state.isLoggedIn = true
  },
}

const actions = {
  async run() {
    try {
      let token = localStorage.getItem('wallet-auth-token');
      let test = JSON.parse(token);
      console.log(token);
      fetch('http://217.182.66.13:4000/transactions', {
        method: 'get',
        headers: new Headers({
          'Content-Type': 'uuid',
          'x-auth-token': test
        })
      }).then(function (response) {
        return response.json();
      }).then(function (v) {
        console.log(v.data.forEach(function (d) {
          console.log(d.name)
        }))
      });
    } catch (err) {
      console.log(err);
    }
  },
}

export default {
    namespaced: 'tabledata',
    state,
    getters,
    mutations,
    actions,
}
