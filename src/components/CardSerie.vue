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
  <div class="bg-black">
    <div class="container text-danger">
      <h2>Serie</h2>
    </div>
    <div class="p-4 section bg-black">
      <div class="container">
        <div class="row gap-2 justify-content-between">
          <div class="card position-relative" style="width: 18rem;" v-for="(card, i) in store.Series">

            <div>
              <img class="card-img-top" :src="'https://image.tmdb.org/t/p/w342' + card.poster_path"
                alt="image not found">
            </div>

            <div class="card-body position-absolute ">
              <h4 class="card-title">{{ card.name }}</h4>
              <h5 class="card-title">{{ card.original_name }}</h5>
              <p class="card-text">{{ card.original_language }}</p>
              <div class="star-container">
                <i class="fa-star fa-solid" v-for="star in Math.ceil(card.vote_average / 2)"></i>
                <i class="fa-star fa-regular" v-for="star in 5 - (Math.ceil(card.vote_average / 2))"></i>
              </div>
              <p>TRAMA: {{ card.overview }}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
.card-body {
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.582);
  width: 100%;
  height: 100%;
  color: white;
  display: none;
}

.card:hover .card-body {
  display: block;
  overflow: auto;
}

.section {
  overflow: auto;
  height: 400px;
}
</style>
