import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos: [],
    carrito: [],
    total: 0
  },
  getters: {
  },
  mutations: {
    set_productos(state, productos) {
      state.productos = productos
    }
  },
  actions: {
    fetch_productos({commit}) {
      fetch('http://sva.talana.com:8000/api/')
      .then(response => response.json())
      .then(data => {
        commit('set_productos', data)
      }
      )
      .catch(error => console.log(error))
    }
  },
  modules: {
  }
})
