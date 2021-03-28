<template>
  <div class="chart">
    <h3 class="chart-title">Epidemic spreading chart</h3>

    <Chart></Chart>
  </div>
</template>


<script>
  import Chart from './Chart'

  export default {
    components: {
      Chart
    }
  }
</script>

<style>
  .chart-title {
    color: #A7A1AE;
  }
</style>
