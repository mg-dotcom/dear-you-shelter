<script setup>
import { onMounted, ref } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "vue-router";
import Header from "@/assets/component/Header.vue";
import db from "../firebase/init.js";
import QueryNav from "@/assets/component/QueryNav.vue";
import QueryView from "./QueryView.vue";

const pets = ref([]);
const adoptPets = ref([]);
const router = useRouter();

async function getPets() {
  const petsCollection = collection(db, "pets");
  const petsSnapshot = await getDocs(petsCollection);
  petsSnapshot.forEach((doc) => {
    let id = doc.id;
    let data = doc.data();
    if (data.ownerId) {
      adoptPets.value.push({ id, ...data });
    }
    pets.value.push({ id, ...data });
  });
}

onMounted(() => {
  getPets();
});

const viewPetDetails = (petId) => {
  router.push({ name: "PetDetail", params: { petId } });
};
</script>

<template>
  <div class="bg-[#f0f4f8] min-h-screen">
    <Header />
    <div class="container mx-auto px-6 py-8">
      <h1 class="text-4xl font-extrabold text-center mb-8 text-[#4b8ea9]">
        Our Lovely Pets
      </h1>
      <QueryNav />
      <div v-if="$route.name.includes('Query')">
        <QueryView :pets="pets" />
      </div>

      <div v-else-if="$route.name === 'Adoption'">
        <p class="text-left text-xl text-[#4b8ea9] font-bold mb-6">
          Adoption Lists
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="pet in adoptPets"
            :key="pet.id"
            class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow transform hover:scale-105 relative cursor-pointer"
            @click="viewPetDetails(pet.id)"
          >
            <img
              :src="pet.photo"
              :alt="pet.name"
              class="w-full h-56 object-cover rounded-t-lg mb-4"
            />
            <h2 class="text-xl font-bold text-[#4b8ea9]">{{ pet.name }}</h2>
            <p class="text-gray-700">Breed: {{ pet.breed }}</p>
            <p class="text-gray-700">
              Birth Date:
              {{
                pet.birthDate.toDate().toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              }}
            </p>
            <p class="mt-4 text-gray-800">{{ pet.overview }}</p>

            <div
              v-if="pet.ownerId"
              class="absolute top-4 right-4 bg-pink-400 text-white text-xs font-semibold px-3 py-1 scale-110 rounded-full shadow-md flex items-center space-x-2 animate-sparkle"
            >
              <span>Adopted!</span>
            </div>
          </div>
        </div>
      </div>

      <div v-else id="pets">
        <p class="text-left text-xl text-[#4b8ea9] font-bold mb-6">
          All Pet Lists
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="pet in pets"
            :key="pet.id"
            class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow transform hover:scale-105 relative cursor-pointer"
            @click="viewPetDetails(pet.id)"
          >
            <img
              :src="pet.photo"
              :alt="pet.name"
              class="w-full h-56 object-cover rounded-t-lg mb-4"
            />
            <h2 class="text-xl font-bold text-[#4b8ea9]">{{ pet.name }}</h2>
            <p class="text-gray-700">Breed: {{ pet.breed }}</p>
            <p class="text-gray-700">
              Birth Date:
              {{
                pet.birthDate.toDate().toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              }}
            </p>
            <p class="mt-4 text-gray-800">{{ pet.overview }}</p>

            <div
              v-if="pet.ownerId"
              class="absolute top-4 right-4 bg-pink-400 text-white text-xs font-semibold px-3 py-1 scale-110 rounded-full shadow-md flex items-center space-x-2 animate-sparkle"
            >
              <span>Adopted!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
