<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from "../store"
export default {
  data() {
    return {
      store,

    }
  },

  methods: {
    ClickSearch() {
      this.$emit("ClickSearch")
    }
  }
}

</script>

<template>
  <div class="justify-content-center">
    <nav class="navbar navbar-light bg-black p-0">
      <form role="search" class="form-inline container">
        <div class="text-danger">
          <h1>Boolflix</h1>
        </div>
        <div class="type d-flex">
          <input v-model="store.SearchText" class="form-control mr-sm-2" type="search" placeholder="Cerca un Film o Serie" aria-label="Search">
          <button @click="ClickSearch()" class="btn btn-outline-danger my-2 my-sm-0" type="button">Cerca</button>
        </div> 
      </form>
    </nav>
  </div>

</template>

<style scoped>

</style>
