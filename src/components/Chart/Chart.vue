<template>
  <div class="chart-container">
    <ChartLine :chart-data="datacollection" id="chart"></ChartLine>
  </div>
</template>

<script>
  import axios from 'axios'
  import ChartLine from './ChartLine.js'

  export default {
    components: {
      ChartLine
    },

    data() {
      return {
        datacollection: null,
        loaded: false,
        top10FirstCountries: null,
        dates: [],
        datasets: []
      }
    },

    methods: {
      fillData() {
        this.datacollection = {
          labels: this.dates,
          datasets: this.datasets
        }
      },

      getRandomColor() {
        function getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max));
        }

        var red = getRandomInt(255);
        var green = getRandomInt(255);
        var blue = getRandomInt(255);

        return "rgb(" + red + "," + green + "," + blue + ")"
      },

      createDatasets() {
        this.top10FirstCountries.forEach(c => {
          this.datasets.push({
            label: c.All.country,
            backgroundColor: 'transparent',
            borderColor: this.getRandomColor(),
            pointBackgroundColor: this.borderColor,
            pointBorderColor: this.borderColor,
            borderWidth: 1,
            data: Object.values(c.All.dates).reverse()
          })
        })
      }
    },

    async created() {
      const {data} = await axios.get('https://covid-api.mmediagroup.fr/v1/history?status=Confirmed&continent=Europe');
      const dataArray = Object.values(data);

      let sortedCountries = dataArray.sort(function (a, b) {
        return b.All.population - a.All.population;
      });

      this.top10FirstCountries = sortedCountries.slice(0, 10)
      this.dates = Object.keys(this.top10FirstCountries[0].All.dates).reverse()

      this.fillData()
      this.createDatasets()
    }
  }
</script>
<style>
  #chart {
    width: 55vw;
    margin: auto;
  }
</style>
