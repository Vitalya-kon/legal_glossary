<script setup>
import { onMounted } from 'vue'
import AOS from "aos";


import Header from './components/Header.vue'
import SearchInput from './components/SearchInput.vue'



// initialize components based on data attribute selectors
onMounted(() => {
   
    AOS.init();
})
</script>

<template>
  <div class="wrapper">
    <Header />
    <SearchInput />
  </div>
  
</template>

<style scoped>
.wrapper {
  @apply min-h-screen bg-gray-100 dark:bg-gray-900;
  background-image: url('/public/image/SL-120722-54400-35.jpg');
}
</style>
