<template>
  <div class="chart">
    <h3>Chart</h3>

  </div>
</template>

<script>
  import axios from "axios";
  import moment from 'moment';

  export default {
    data() {
      return {
        countries: []
      }
    },

    async created() {
      const { data } = await axios.get('https://covid-api.mmediagroup.fr/v1/history?status=Confirmed&continent=Europe');

      const dataArray =  Object.values(data);

      dataArray.forEach(d => {

        console.log(d.All.dates);
      })

    }
  }

</script>
