<script setup>
import { ref as vueRef, watch, watchEffect } from 'vue'
import { db, ref as firebaseRef, onValue, query, orderByKey, startAt, endAt } from '../firebaseeDB'
import AnswerSection from './AnswerSection.vue'

const searchQuery = vueRef('')
const output = vueRef([])

watch(searchQuery, (newVal) => {
    if (!newVal) {
        output.value = [];
    }
})

watchEffect(() => {
    if(!searchQuery.value) return
    const dbRef = firebaseRef(db, '/');
    const capitalizedSearchQuery = searchQuery.value.charAt(0).toUpperCase() + searchQuery.value.slice(1);
    const q = query(dbRef, orderByKey(), startAt(capitalizedSearchQuery), endAt(capitalizedSearchQuery+"\uf8ff"));
    onValue(q, (snapshot) => {
        output.value = [];
        snapshot.forEach((childSnapshot) => {
            var childKey = childSnapshot.key;
            var childValue = childSnapshot.val();
            output.value.push({key: childKey, value: childValue});
        });
    }, (error) => {
        console.error("Ошибка чтения данных: ", error);
    });
})

</script>

<template>
    <div class="container mx-auto px-4 sticky top-4 z-10">
        <form class="lg:max-w-md mx-auto w-full lg:w-1/2 mt-6">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Поиск</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" v-model="searchQuery" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Найдем ответы..." required />
                
            </div>
        </form>
    </div>
    <AnswerSection :data="output"/>
    
</template>

<style>

</style>