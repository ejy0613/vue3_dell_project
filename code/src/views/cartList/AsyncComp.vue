<template>
  <div>
    <h3>{{childTitle}}</h3>
    <ul>
      <li v-for="item in jsonData" :key="item.name">
        {{ item.name }} - {{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const childTitle = 'async component'
function fetchData () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: '张三',
          age: 15
        },
        {
          name: '李四',
          age: 17
        }
      ])
    }, 5000)
  })
}

const jsonData = ref(await fetchData())

</script>
