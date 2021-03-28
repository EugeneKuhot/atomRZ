import VueRouter from 'vue-router'
import Table from '../components/Table/Table'
import NotFound from '../components/404/404'
import ChartComponent from "../components/Chart/ChartComponent"

export default new VueRouter ({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Table
    },
    {
      path: '/chart',
      component: ChartComponent
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
