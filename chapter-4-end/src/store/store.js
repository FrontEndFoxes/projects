import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    addToCart(state, payload) {
      if (state.cart.indexOf(payload) <= -1) {
        state.cart.push(payload);
      }
    },
    removeFromCart(state, payload) {
      state.cart.splice(state.cart.indexOf(payload), 1);
    }
  },
  actions: {
    addToCart({ commit }, payload) {
      commit("addToCart", payload);
    },
    removeFromCart({ commit }, payload) {
      commit("removeFromCart", payload);
    }
  }
});
