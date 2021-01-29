import Vue from "vue";
import Vuex from "vuex";
import currency from "./modules/currency";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    currency
  }
});

store.dispatch("initCurrencyStore");

export default store;
