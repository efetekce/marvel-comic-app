// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useComicsStore = defineStore('comics', () => {
  //state
  const favCount = ref(0)
  const list = ref([])
  const favList = ref([])
  const apiKey = import.meta.env.VITE_API_KEY
  const hash = import.meta.env.VITE_HASH

  //getters
  // const doubleCount = computed(() => count.value * 2)

  //actions

  async function fetchData() {
    const bigData = await axios.get(
      `http://gateway.marvel.com/v1/public/comics?orderBy=focDate&limit=75&ts=1&apikey=${apiKey}&hash=${hash}`
    )
    // console.log(bigData.data.data.results)
    list.value = bigData.data.data.results
  }

  function favHandler(item) {
    console.log(item)
    if (favList.value.find((i) => item.id === i.id)) {
      removeHandler(item)
    } else {
      favList.value.push(item)
      favCount.value += 1
      console.log(favCount.value)
    }
  }
  function removeHandler(item) {
    favList.value = favList.value.filter((i) => item.id !== i.id)
    console.log(favList.value)
    favCount.value -= 1
  }
  return { favCount, list, favList, fetchData, favHandler, removeHandler }
})
