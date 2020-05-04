<template>
  <div id="app">
    <div class="container">
        <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
    </div>
  </div>
</template>

<script>
import PieChart from "../PieChart.js";
export default {
  name: "App",
  components: {
    PieChart
  },
  data() {
    return {
      chartOptions: {
        hoverBorderWidth: 20
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["ML", "Web", "IoT","English","Reading Books"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#F97F01", "#41B883", "#3C79DE","#D00300","343131"],
            data: [2,11,1,4,2]
          }
        ]
      }
    };
  }
};
</script>

<style>

</style>
