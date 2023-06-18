<script setup>
import { useComicsStore } from '../stores/comics'
import { useRoute } from 'vue-router'
const store = useComicsStore()
const route = useRoute()

const comic = store.list.find((c) => c.id === parseInt(route.params.id))
</script>

<template>
  <h1>Comic Details</h1>
  <!-- <p>{{ comic }}</p> -->
  <div class="detailwrapper">
    <p class="title">{{ comic.title }}</p>
    <p class="desc">{{ comic.description }}</p>

    <p class="creators">
      Creators:
      <span v-for="creator in comic.creators.items" :key="creator.name">{{ creator.name }}</span>
    </p>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  color: whitesmoke;
  font-weight: 600;
  font-size: 40px;
}
.title {
  font-weight: 600;
  font-size: 20px;
}
.desc {
  font-weight: 400;
  font-size: 300;
}
.detailwrapper {
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
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
