<script setup>
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'

const props = defineProps(['data'])

const isCopy = ref({})

onMounted(() => {
    console.log(props.data); // Выводит пропс data в консоль
    initFlowbite();
})
</script>

<template>
    <div class="container mx-auto px-4 lg:max-w-60 lg:mt-28 mt-16 pb-20" >
        <div data-aos="fade-up" v-for="(item, index) in props.data" :key="index" class="lg:mt-6 mt-2 bg-gray-500 bg-opacity-80 p-6 rounded-lg" v-if="props.data && props.data.length">
            
            <div class="relative">
                <div class="absolute top-0 right-3 cursor-pointer" @click="isCopy[index] = !isCopy[index]">
                    <span v-if="!isCopy[index]" :data-tooltip-target="'tooltip-light_' + index" data-tooltip-placement="top">
                        <svg  width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z" stroke="#f5f5f5" stroke-width="1.5"></path> <path opacity="0.5" d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5" stroke="#f5f5f5" stroke-width="1.5"></path> </g></svg>
                    </span>
                   
                    <span v-else>
                        <svg  width="33px" height="33px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.59961 11.3974C6.59961 8.67119 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C17.9549 5.61426 19.3125 5.61426 20.1561 6.46118C20.9996 7.3081 20.9996 8.6712 20.9996 11.3974V16.2167C20.9996 18.9429 20.9996 20.306 20.1561 21.1529C19.3125 21.9998 17.9549 21.9998 15.2396 21.9998H12.3596C9.64432 21.9998 8.28667 21.9998 7.44314 21.1529C6.59961 20.306 6.59961 18.9429 6.59961 16.2167V11.3974Z" fill="#e3e3e3"></path> <path opacity="0.5" d="M4.17157 3.17157C3 4.34315 3 6.22876 3 10V12C3 15.7712 3 17.6569 4.17157 18.8284C4.78913 19.446 5.6051 19.738 6.79105 19.8761C6.59961 19.0353 6.59961 17.8796 6.59961 16.2167V11.3974C6.59961 8.6712 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C16.8915 5.61426 18.0409 5.61426 18.8777 5.80494C18.7403 4.61146 18.4484 3.79154 17.8284 3.17157C16.6569 2 14.7712 2 11 2C7.22876 2 5.34315 2 4.17157 3.17157Z" fill="#e3e3e3"></path> </g></svg>
                    </span>

                    
                
                </div>
                <p class="mb-4 text-center " >
                    <span class="font-bold font-manrope  text-gray-800  text-2xl bg-yellow-100 inline-block rounded-lg px-3">{{ item.key }}</span>
                </p>
                <p class="text-white font-manrope text-lg  font-semibold " v-html="item.value"></p>
            </div>
        </div>
    </div>
</template>