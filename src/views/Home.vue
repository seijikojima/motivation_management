<template>
  <div class="home">
    <h1>Motivation Manager</h1>
    <ul>
      <li>Plotting concentration rate on a daily basis.</li>
      <li>Record what' you did every day.</li>
      <li>Book lists</li>
      <li>Storing application idea.</li>
      <li>Skill map</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator';

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scope>

.home {
  width : 80%;
  margin : 0 auto 0 auto;
  /* border : solid 1px #000; */

}

</style>
