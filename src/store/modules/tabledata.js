import ls from 'local-storage'
import store from 'src/store'
import router from 'src/router'
import api from 'src/services/api'

let state = {
      moneyData: ''
}

const getters = {
  filterPositive: state => {
    return state.moneyData.filter(d => d.amount > 0);
  },
  filterNegative: function(state){
    return state.moneyData.filter(d => d.amount < 0);
  }
}

const mutations = {
  updateData: function(state, n) {
    state.moneyData = n;
  },
}

const actions = {
  runIt(context, filterIt) {
    try {
      let token = localStorage.getItem('wallet-auth-token');
      let test = JSON.parse(token);
     fetch('http://217.182.66.13:4000/transactions', {
        method: 'get',
        headers: new Headers({
          'Content-Type': 'uuid',
          'x-auth-token': test
        })
      }).then(function (response) {
        return response.json();
      }).then(function (resources) {
        let rawData = resources.data;
        context.commit('updateData', rawData);
        console.log(state.moneyData);
      });
    } catch (err) {
      console.log(err); 
    }
  },
}

export default {
  state,
  mutations,
  getters,
  actions
}
