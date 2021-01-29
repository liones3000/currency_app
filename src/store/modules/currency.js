import axios from "@/plugins/axios";
import mutations from "@/store/mutations";
import Vue from "vue";

function serializeResponse(currency) {
  const clearList = currency.reduce((acc, currency) => {
    acc[currency.cc] = currency;
    return acc;
  }, {});
  clearList["UAH"] = {
    txt: "Гривня",
    rate: 1,
    cc: "UAH"
  };
  return clearList;
}

const {
  CURRENCY,
  CURRENCYFORSELECT,
  CHANGESELECTVALUE,
  CHANGEDATAFORTABLE,
  ONFAVORITE
} = mutations;

const currencyStore = {
  namespaced: true,
  state: {
    currency: {},
    listForSelect: [],
    dataForTable: [],
    selected: "UAH"
  },
  getters: {
    getCurrency: ({ currency }) => currency,
    getListForSelect: ({ listForSelect }) => listForSelect,
    selected: ({ selected }) => selected,
    dataForTable: ({ dataForTable }) => dataForTable
  },
  mutations: {
    [CURRENCY](state, val) {
      state.currency = val;
    },
    [CURRENCYFORSELECT](state, value) {
      state.listForSelect = value;
    },
    [CHANGESELECTVALUE](state, value) {
      state.selected = value;
    },
    [CHANGEDATAFORTABLE](state, value) {
      state.dataForTable = value;
    },
    [ONFAVORITE](state, data) {
      const { code, favorite } = data;
      const index = state.dataForTable.findIndex(item => item.code == code);
      Vue.set(state.dataForTable[index], "favorite", favorite);
    }
  },
  actions: {
    initCurrencyStore: {
      async handler({ dispatch }) {
        await dispatch("fetchCurrency");
        dispatch("createListForSelect");
        dispatch("createDataForTable");
      },
      root: true
    },
    async fetchCurrency({ commit }) {
      try {
        const response = await axios.get("exchange?json");
        const currency = serializeResponse(response);
        commit(CURRENCY, currency);
      } catch (error) {
        Promise.reject(error);
      }
    },

    createListForSelect({ commit, state }) {
      const list = Object.entries(state.currency).reduce((acc, val) => {
        acc.push({
          value: val[1].cc,
          text: val[1].txt
        });
        return acc;
      }, []);
      commit(CURRENCYFORSELECT, list);
    },

    createDataForTable({ getters, commit }) {
      const serializeData = Object.entries(getters.getCurrency).reduce(
        (acc, item) => {
          acc.push({
            name: item[1].txt,
            code: item[1].cc,
            rate: item[1].rate,
            favorite: false
          });
          return acc;
        },
        []
      );
      commit(CHANGEDATAFORTABLE, serializeData);
    },

    changeFavorite({ commit }, item) {
      const { code, favorite } = item;
      commit(ONFAVORITE, { code, favorite: !favorite });
    },

    changeSelected({ commit }, value) {
      commit(CHANGESELECTVALUE, value);
    }
  }
};

export default currencyStore;
