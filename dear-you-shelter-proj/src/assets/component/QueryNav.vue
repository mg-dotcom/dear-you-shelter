<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div class="flex flex-wrap gap-4 p-4">
    <div
      class="bg-gradient-to-r bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-200 cursor-pointer"
      @click="router.push('/')"
    >
      All Pets
    </div>
    <div
      class="bg-indigo-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-600 transition duration-200 cursor-pointer"
      @click="router.push({ name: 'Query', params: { queryId: '1' } })"
    >
      Adoption Fee Ranging from $100 to $200
    </div>
    <div
      class="bg-teal-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-teal-600 transition duration-200 cursor-pointer"
      @click="router.push({ name: 'Query', params: { queryId: '2' } })"
    >
      Premium Owners Who live in Springfield and Hamtramck
    </div>
    <div
      class="bg-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-pink-600 transition duration-200 cursor-pointer"
      @click="router.push({ name: 'Query', params: { queryId: '3' } })"
    >
      Total Number of Standard Members in Our Shelter
    </div>
    <div
      class="bg-yellow-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-yellow-600 transition duration-200 cursor-pointer"
      @click="router.push({ name: 'Query', params: { queryId: '4' } })"
    >
      Sort Dogs by Birth Date
    </div>
    <div
      class="bg-purple-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-purple-600 transition duration-200 cursor-pointer"
      @click="router.push({ name: 'Query', params: { queryId: '5' } })"
    >
      Most Recently Adopted 3 Pets
    </div>
  </div>
</template>

<style scoped></style>
