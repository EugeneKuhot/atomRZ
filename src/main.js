// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Table from './components/Table'
import Chart from './components/Chart'

Vue.config.productionTip = false

const NotFound = { template: '<p>Страница не найдена</p>' }

const routes = {
  '/': Table,
  '/chart': Chart
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },

  methods: {

  },

  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
