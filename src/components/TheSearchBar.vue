<script>
import { store } from "../store"
export default {
  data() {
    return {
      store,

    }
  },

  methods: {
    ClickSearch(){
      this.$emit("ClickSearch")
    }
  }
}

</script>

<template>
  <h1>Boolflix</h1>
  <nav class="navbar navbar-light bg-light">
    <form role="search" class="form-inline d-flex container">
      <input v-model="store.SearchText" class="form-control mr-sm-2" type="search" placeholder="Search"
        aria-label="Search">
      <button @click="ClickSearch()" class="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
    </form>
  </nav>
</template>

<style>

</style>
