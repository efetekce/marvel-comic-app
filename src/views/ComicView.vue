<script setup>
import { useComicsStore } from '../stores/comics'
import { useRoute } from 'vue-router'
const store = useComicsStore()
const route = useRoute()
console.log(route.params.id)
console.log(store)

const comic = store.list.find((c) => c.id === parseInt(route.params.id))
</script>

<template>
  <div>Comic View</div>
  <!-- <p>{{ comic }}</p> -->
  <div class="detailwrapper">
    <p>{{ comic.title }}</p>
    <p>{{ comic.description }}</p>

    <p class="creators">
      Creators:
      <span v-for="creator in comic.creators.items" :key="creator.name">{{ creator.name }}</span>
    </p>
  </div>
</template>

<style scoped>
.detailwrapper {
  color: whitesmoke;
  justify-content: space-between;
  background-color: crimson;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
}
.creators {
  display: flex;
  justify-content: space-evenly;
  font-style: oblique;
}
</style>
