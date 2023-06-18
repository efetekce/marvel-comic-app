// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useComicsStore = defineStore('comics', () => {
  //state
  const favCount = ref(0)
  const list = ref([])
  const favList = ref([])

  //getters
  // const doubleCount = computed(() => count.value * 2)

  //actions

  async function fetchData() {
    const bigData = await axios.get(
      'http://gateway.marvel.com/v1/public/comics?orderBy=focDate&limit=50&ts=1&apikey=fc35d395c01a6d850fa395f2d32a9ddc&hash=1f29a8967f93f0c2110f9e08f163d935'
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
