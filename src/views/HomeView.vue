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
  <header>
    <h1>Marvel Comic Store</h1>
    <p>
      A handful of marvel comics choices will be listed here. You can heart them to make a reading
      list, making them accessible in favorites tab.
    </p>
  </header>

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
      <button @click.prevent="store.favHandler(item)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="heart"
          :class="{ isActive: store.favList.find((i) => item.id === i.id) }"
        >
          <path
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>
    </RouterLink>
  </div>
  <!--  -->
</template>

<style scoped>
header {
  padding: 200px;
  margin-top: -80px;
  height: 500px;
  background-image: url('../assets/54685.jpg');
  background-repeat: repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  color: whitesmoke;
}
p {
  text-align: center;
  font-weight: 400;
  font-size: 20px;
}
h1 {
  font-size: 45px;
  font-weight: 600;
}
button {
  border: none;
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
#heart {
  width: 50px;
  stroke: black;
  fill: slategrey;
  stroke-dasharray: 57;
  stroke-dashoffset: 57;
  opacity: 0.8;
}
@keyframes like {
  0% {
    stroke-dashoffset: 57;
    fill: #ccc;
  }
  70% {
    stroke-dashoffset: 0;
    fill: #ccc;
  }
  100% {
    stroke-dashoffset: 0;
    fill: #f06;
  }
}
@keyframes unlike {
  0% {
    stroke-dashoffset: 0;
    fill: #f06;
  }
  30% {
    stroke-dashoffset: 0;
    fill: #ccc;
  }
  100% {
    stroke-dashoffset: 57;
    fill: #ccc;
  }
}
.isActive {
  animation: 2s ease-in forwards like;
}
/* .isNotActive {
  animation: 2s ease-out forwards unlike;
} */
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

  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
}
.card:hover {
  opacity: 0.5;
  scale: 20rem;
  transition: all;
  transition-duration: 500ms;
  transform: scale(1.15, 1.15);
}
</style>
