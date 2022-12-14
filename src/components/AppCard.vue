<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from "../store";

export default {
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="container">
    <h2>Film</h2>
  </div>
  <div class="container">
    <div class="row gap-2 justify-content-between">
      <div class="card col-4" style="width: 18rem;" v-for="(card, i) in store.Movies">
        <img class="card-img-top" :src="'https://image.tmdb.org/t/p/w500'+ card.backdrop_path" alt="image not found">
        <div class="card-body">
          <h4 class="card-title">{{ card.title }}</h4>
          <h5 class="card-title">{{ card.original_title }}</h5>
          <p class="card-text">{{ card.original_language }}</p>
          <p class="card-text">{{ card.vote_average }}</p>

        </div>
      </div>

    </div>

  </div>
</template>

<style>
  img{
    width: 100%;
  }
</style>