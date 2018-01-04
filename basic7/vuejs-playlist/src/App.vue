<template>
  <div>
    <h1>{{title}}</h1>
    <!-- <p>{{greeting()}}</p> -->
    <comas></comas>
  </div>
</template>

<script>
//Local Component
import Comas from "./Coma.vue";

export default {
  components: {
    comas: Comas
  },
  data() {
    return {
      title: "Coma App"
    };
  }
};
</script>

<style scoped>
/* 
같은 스타일이 존재하면 마지막 스타일만 적용됨 
스타일 스코프를 주기위해 scoped사용
*/
h1 {
  color: red;
}
</style>
