<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/plot">Plot</router-link> | 
      <router-link to="/piechart">PieChart</router-link> | 
      <router-link to="/booklists">BookLists</router-link> | 
      <router-link to="/applications">Applications</router-link>

    </div>
    <router-view/>
  </div>
</template>

<style>
* {
    box-sizing: border-box;
}
body {
    margin : 0px;
}

#app {
  font-family: Robot;
  color: #343131;
}

#nav {
  padding: 5px;
  text-align: center;
  box-shadow: 0 0 8px gray;
}

#nav a {
  font-weight: bold;
  color: #343131;
}

#nav a.router-link-exact-active {
  color: #D00300;
}
</style>
