<template>

  <ul class="table-list">
    <li class="table-item table-title">
      <h3 class="country-name-title">Сountry</h3>
      <h3 class="population-title">Population</h3>
      <h3 class="people_vaccinated-title">Number of people vaccinated</h3>
      <h3 class="percent-of-vaccinated-title">% of people vaccinated</h3>
    </li>

    <li class="table-item" v-for="country in tableData" v-if="country.All.country">
      <span class="country-name">{{ country.All.country }}</span>

      <span class="population" v-if="country.All.population">{{ country.All.population }}</span>
      <span class="population" v-else>No data</span>

      <span class="people_vaccinated"
            v-if="country.All.people_vaccinated">{{ country.All.people_vaccinated }}</span>
      <span class="people_vaccinated" v-else>No data</span>

      <span class="percent-of-vaccinated" v-if="country.All.people_vaccinated && country.All.population">
              {{((country.All.people_vaccinated * 100) / country.All.population).toFixed(3) }} %
            </span>
      <span class="percent-of-vaccinated" v-else>No data</span>
    </li>
  </ul>

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

<style scoped>

  .table-list {
    text-align: left;
    overflow: scroll;
    width: 80%;
    margin: 0 auto;
    display: table;
    padding: 0 0 8em 0;
    list-style: none;
    border-radius: 10px;
  }

  .table-item {
    display: flex;
    align-items: center;
  }

  .table-title {
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    z-index: 10;
  }

  .table-item:nth-child(odd) {
    background-color: #323C50;
  }

  .table-item:nth-child(even) {
    background-color: #2C3446;
  }

  .country-name-title,
  .population-title,
  .people_vaccinated-title,
  .percent-of-vaccinated-title {
    font-weight: bold;
    font-size: 1em;
    text-align: left;
    color: #4a91b1;
    padding-bottom: 2%;
    padding-top: 2%;
    padding-left: 2%;
  }

  .table-item span {
    font-weight: normal;
    font-size: 1em;
    -webkit-box-shadow: 0 2px 2px -2px #0e1119;
    -moz-box-shadow: 0 2px 2px -2px #0E1119;
    box-shadow: 0 2px 2px -2px #0e1119;
    color: #A7A1AE;
    padding-bottom: 2%;
    padding-top: 2%;
    padding-left: 2%;
    transition: .4s all ease;
  }

  .table-item span:hover {
    background-color: #FFF842;
    color: #403E10;
    font-weight: bold;
    box-shadow: #7f7c21 -1px 1px, #7f7c21 -2px 2px, #7f7c21 -3px 3px, #7f7c21 -4px 4px, #7f7c21 -5px 5px, #7f7c21 -6px 6px;
    transform: translate3d(6px, -6px, 0);
    transition: .4s all ease;
  }

  span.country-name {
    color: #FB667A;
  }

  .country-name-title,
  .country-name {
    width: 30%;
  }

  .population-title,
  .population {
    width: 20%;
  }

  .people_vaccinated-title,
  .people_vaccinated {
    width: 20%;
  }

  .percent-of-vaccinated-title,
  .percent-of-vaccinated {
    width: 30%;
  }

</style>
