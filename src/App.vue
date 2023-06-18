<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useComicsStore } from './stores/comics'
const store = useComicsStore()
</script>

<template>
  <header>
    <RouterLink to="/" class="link" active-class="active">Home</RouterLink>
    <RouterLink to="/favorites" class="link fav" active-class="active"
      >Favorites <span class="favicon">{{ store.favCount }} </span>
    </RouterLink>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.active {
  font-weight: bold;
  color: crimson !important;
}
.link {
  color: whitesmoke;
  text-decoration: none;
  font-size: 3rem;
}
.link fav {
  position: relative;
  margin-top: 200px;
}
.favicon {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 20px;
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
