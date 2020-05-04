<template>
  <div class="about">
    <div class="container">
    <line-chart 
    :chart-data="this.datacollection" :options="this.options"></line-chart>   
    </div>
  </div>
  
</template>

<script>
  import LineChart from '../LineChart.js'
//   import store from '../store.js'
  export default {
    name : "linechart",
    data() {
        return {
        timeplot : [0,0,0,0,0,4,4,4,1,3,
                    0,0,5,5,5,0,0,0,0,0,
                    5,1,4,5,0,0,5,4,5,5],
        th : Array(50).fill(80),
        datacollection : null,
        options : null,
        ng_prob : 0.0,
        }
    },
    sockets: {
        connect() {
            console.log('vue : socket connected')
        },
        send_to_front(msg) {
            console.log("vue : here is front-end",msg)
            this.img_path = msg.img_path;
            this.ng_prob = msg.ng_prob;
            this.queue_timeseries()
        }
    }, 
    mounted() {
        this.queue_timeseries()
    },
    methods : {
        queue_timeseries : function ()  {
            console.log("here is queue",this.ng_prob)
            this.timeplot.push(this.ng_prob)
            if(this.timeplot.length > 50){
                this.timeplot.shift();
            }
            this.datacollection = {
                labels: [...Array(this.timeplot.length).keys()],
                
                datasets: [
                  {
                    label: "Concentration rate",
                    data : this.timeplot,
                    backgroundColor: "transparent",
                    borderColor: "rgba(208, 3, 0,0.3)",
                    pointBackgroundColor: "rgba(208, 3, 0,0.9",
                    lineTension : 0,
                  }
                ],
            },
            this.options = {
                scales: {
                    yAxes: [
                    {
                        ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 5
                        }
                    }
                    ]
                },
                legend: {
                    display: true,
                }
            }
        }
    },
    components : {
      LineChart
    }
  }
</script>

<style>
.container {
  margin : 50px auto 0 auto;
  padding : 20px;
  width : 60%;
  /* border : solid 3px #111; */
  text-align :center;
  box-shadow: 0 0 8px #333;
  /* background-color : #f0f0f0; */
}
</style>