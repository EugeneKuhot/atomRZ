<template>
  <div id="app">
    <header>
      <h1>Eugene Kuhot Zadanie Rekrutacyjne</h1>
    </header>
    <main>
      <div class="content">
        <ul>
          <li v-for="country in tableData" v-if="country.All.country">
            <span>{{ country.All.country }}</span>
            <span>{{ country.All.population }}</span>
            <span>{{ country.All.people_vaccinated }}</span>
            <span>{{(country.All.people_vaccinated * 100) / country.All.population }}</span>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        tableData: null,
        tableEndpoint: 'https://covid-api.mmediagroup.fr/v1/vaccines',
      }
    },

    created() {
      this.getTableData();
    },

    methods: {
      getTableData() {
        axios.get(this.tableEndpoint)
          .then(response => {
            this.tableData = response.data;
          })
          .catch(error => {
            console.log('-----error-------');
            console.log(error);
          })
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
