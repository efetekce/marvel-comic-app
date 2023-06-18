<script setup>
import { useComicsStore } from '../stores/comics'
const store = useComicsStore()
console.log(store.favList)
console.log(store.favCount)
</script>

<template>
  <div class="about">
    <h1>This is the favorites page</h1>
    <div v-for="fav in store.favList" :key="fav.id" class="favoritecard">
      <p>{{ fav.title }}</p>
      <p>{{ fav.description }}</p>
      <!-- <p>{{ fav.title }}</p> arka plan olcak -->
      <p v-for="creator in fav.creators.items" :key="creator.name">{{ creator.name }}</p>
    </div>
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
.favoritecard{
  /* display: flex; */
  justify-content: space-between;
  background-color: crimson;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;

}
</style>
