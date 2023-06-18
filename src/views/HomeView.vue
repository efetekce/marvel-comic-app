<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useComicsStore } from '../stores/comics'
const store = useComicsStore()

onMounted(() => {
  store.fetchData()
})
</script>

<template>
  <header><h1>Marvel Comic Store</h1></header>
  <!-- '{background: `url(${item.thumbnail.path}.${item.thumbnail.extension})`}' -->
  <div class="container">
    <RouterLink
      :to="`/comic/${item.id}`"
      v-for="item in store.list"
      :key="item.id"
      class="card"
      :style="{
        backgroundImage: `url(${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension})`
      }"
    >
      <button
        @click.prevent="store.favHandler(item)"
        :class="{ isActive: store.favList.find((i) => item.id === i.id) }"
      >
        ⭐🎇
      </button>
    </RouterLink>
  </div>
</template>

<style scoped>
h1 {
  font-size: 40px;
}
button {
  border: none;
  background-color: transparent;
}
.isActive {
  background-color: darkgreen;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.card {
  width: 10rem;
  height: 16rem;
  margin: 2rem 1rem;
  /* padding: 2rem; */
  border: 1px solid black;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.card:hover {
  opacity: 0.5;
  transition: all;
  transition-duration: 500ms;
}
</style>
