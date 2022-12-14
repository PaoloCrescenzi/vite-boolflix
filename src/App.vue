<script>
import axios from "axios";
import TheSearchBar from './components/TheSearchBar.vue';
import TheMain from './components/TheMain.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from "./store"

export default {
  components: { TheSearchBar, TheMain },

  data() {
    return {
      store
    }
  },

  created() {
  },

  methods: {
    call() {
      axios.get('https://api.themoviedb.org/3/search/movie?', {
        params: {
          language: "it-IT",
          api_key: "b87490d8045dfe2258fcde335abc7cc0",
          query: store.SearchText
        }
      })
        .then(resp => {
          store.Movies = resp.data.results
          console.log(store.Movies)
        })

      axios.get('https://api.themoviedb.org/3/search/tv?', {
        params: {
          language: "it-IT",
          api_key: "b87490d8045dfe2258fcde335abc7cc0",
          query: store.SearchText
        }
      })
        .then(resp => {
          store.Series = resp.data.results
          console.log(store.Series)
        })
    }
  }
}
</script>

<template>
  <TheSearchBar @ClickSearch="call()" />
  <TheMain />
</template>

<style>

</style>
