<script setup>
import { useComicsStore } from '../stores/comics'
const store = useComicsStore()
console.log(store.favList)
console.log(store.favCount)
</script>

<template>
  <div class="favwrapper">
    <h1>Your Favorites List</h1>
    <div v-for="fav in store.favList" :key="fav.id" class="favoritecard">
      <p class="title">{{ fav.title }}</p>
      <p class="desc">{{ fav.description }}</p>
      <!-- <p>{{ fav.title }}</p> arka plan olcak -->
      <p v-for="creator in fav.creators.items" :key="creator.name">{{ creator.name }}</p>
    </div>
  </div>
</template>

<style scoped>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
.favwrapper {
  color: whitesmoke;
}
.title {
  font-weight: 600;
  font-size: 20px;
}
.desc {
  font-weight: 400;
  font-size: 300;
}
h1 {
  font-size: 50px;
  text-align: center;
  color: whitesmoke;
  font-weight: 600;
}
.favoritecard {
  background-color: crimson;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
</style>
