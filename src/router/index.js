import VueRouter from 'vue-router';
import Chart from './../components/Chart';
import Table from './../components/Table';
import NotFound from './../components/404';

export default new VueRouter ({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Table
    },

    {
      path: '/chart',
      component: Chart
    },

    {
      path: '*',
      component: NotFound
    }
  ]
})
