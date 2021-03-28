import { Line, mixins } from 'vue-chartjs'

const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null,
      responsive: false,
      maintainAspectRatio: false
    }
  },

  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}

