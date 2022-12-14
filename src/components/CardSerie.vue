<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from "../store";

export default {
  data() {
    return {
      store
    }
  }
}

</script>

<template>
  <div class="p-4">
    <div class="container">
      <h2>Serie</h2>
    </div>
    <div class="container">
      <div class="row gap-2 justify-content-between">
        <div class="card" style="width: 18rem;" v-for="(card, i) in store.Series">

          <div>
            <img class="card-img-top" :src="'https://image.tmdb.org/t/p/w500' + card.poster_path" alt="image not found">
          </div>
          
          <div class="card-body">
            <h4 class="card-title">{{ card.name }}</h4>
            <h5 class="card-title">{{ card.original_name }}</h5>
            <p class="card-text">{{ card.original_language }}</p>
            <p class="card-text">{{ card.vote_average }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<style>
img{
  display: block;
  width: 100%;
}

.card-body{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
}

.card:hover .card-body > * {
  opacity: 1;
}

</style>
