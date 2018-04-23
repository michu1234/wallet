import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import auth from './modules/auth'
import tabledata from './modules/tabledata'

Vue.use(Vuex)

const isDebug = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'testing'
const modules = {
  auth,
  tabledata,
}

export default new Vuex.Store({
  plugins: isDebug
    ? [createLogger()]
    : [],
  strict: isDebug,
  modules,
})
