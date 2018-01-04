<template>
  <!-- <h1>Comas List</h1> Vue 템플릿은 하나의 루트 엘리먼트를 가질수 있으므로 오류남-->
  <div>
    <h1>Comas List</h1>
    <ul>
        <li v-for="coma in comas">{{coma}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comas: ["coma333", "coma333ryu", "coma-y"]
    };
  }
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
