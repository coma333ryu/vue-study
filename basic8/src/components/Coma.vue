<template>
  <div id="comas">
      <ul>
          <li v-for="coma in comas" v-on:click="coma.show = !coma.show">
              <h2>{{coma.name}}</h2>
              <h3 v-show="coma.show">{{coma.hobby}}</h3>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comas: [
          {name:'coma333', hobby:'game', show: false},
          {name:'coma', hobby:'boxing', show: false},
          {name:'coma333ryu', hobby:'sleeping', show: false}
      ]
    }
  }
}
</script>

<style scoped>
#comas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
