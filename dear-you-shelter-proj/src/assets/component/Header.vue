<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div class="bg-[#38393a] text-gray-900">
    <div class="container mx-auto px-6 py-2 flex justify-between items-center">
      <div @click="router.push('/')" class="cursor-pointer">
        <div
          class="text-3xl font-bold text-center flex items-center justify-center text-[#5d9fc2]"
        >
          <span>Dear</span>
          <img src="@/assets/dog-cat.svg" alt="Cute dog and cat" class="w-16" />
          <span class="text-3xl">You Shelter</span>
        </div>
      </div>
      <div class="hidden md:flex space-x-8 justify-center items-center">
        <a
          href="#"
          class="text-lg font-semibold text-[#5d9fc2] hover:text-pink-400 transition duration-300 transform hover:scale-110 cursor-pointer"
          @click="router.push('/')"
          >Home</a
        >
        <a
          href="#pets"
          class="text-lg font-semibold text-[#5d9fc2] hover:text-pink-400 transition duration-300 transform hover:scale-110 cursor-pointer"
          @click="router.push('/')"
          >Pets</a
        >

        <a
          class="text-lg font-semibold text-[#5d9fc2] hover:text-pink-400 transition duration-300 transform hover:scale-110 cursor-pointer"
          @click="router.push('/pet/adoption')"
          >Adoption</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
