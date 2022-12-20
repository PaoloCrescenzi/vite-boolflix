<script>
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  components: { AppCard, CardSerie },

  data(){
    return{
      store
    }
  }
}

import 'bootstrap/dist/css/bootstrap.min.css';
import AppCard from './AppCard.vue';
import CardSerie from './CardSerie.vue';
import {store} from '../store'
</script>

<template>
  
  <AppCard></AppCard>
  <CardSerie></CardSerie>
  
  
</template>

<style scoped>

</style>
