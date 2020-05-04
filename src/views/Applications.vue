<template>
  <div id="app">
    
    <!-- One day, Changeing this to proper passwd system like JWT -->
    <div class="container">    
        <div v-for="a in apps" :key="a.id">
          <div class="app_title">{{a.title}}</div>
        </div>
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
        passwd : "",
        passwd_flag : false,
        apps : [
            { id: 0, title : "Object Detection", tag : "Machine Learning", url : ""},
            { id: 1, title : "Class Activation Mapping", tag : "Machine Learning", url : ""},
            { id: 2, title : "ML Model Development Tool"},
            { id: 3, title : "ML Result Viewer"},
            { id: 6, title : "CMS", tag : "Web Application", url : ""},
            
        ]
    };
  },
  methods: {
      check_passwd : function() {
          if(this.passwd === "hoge") this.passwd_flag = true;
      }
  }

};
</script>

<style scope>
.container {
  margin : 20px auto 0 auto;
  padding : 5px 100px 5px 100px;
  width : 60%;
  /* border : solid 3px #111; */
  /* text-align :center; */
  box-shadow: 0 0 8px #aaa;
  border-radius : 5px;
  /* background-color : #f0f0f0; */
}

.app_title {

    border-radius : 5px;
    border : solid 1px #ddd;
    padding : 0px 5px;
    margin : 10px 0 10px 0
    /* padding : 2px; */
}


</style>
