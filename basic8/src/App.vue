<template>
  <div>
    <app-header></app-header>
    <app-coma></app-coma>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Coma from './components/Coma'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-coma': Coma
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>

</style>

