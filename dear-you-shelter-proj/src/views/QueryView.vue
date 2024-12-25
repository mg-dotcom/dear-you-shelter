<script setup>
import { ref, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  getCountFromServer,
} from "firebase/firestore";
import db from "../firebase/init.js";

const props = defineProps({
  pets: Array,
});

const router = useRouter();
const info = ref([]);
const route = useRoute();
const queryTitle = ref("");
const queryId = ref(route.params.queryId);

const getQueryResults = async () => {
  let qry;
  info.value = [];
  if (queryId.value === "1") {
    queryTitle.value = "Adoption Fee Ranging from $100 to $200";
    const ref = collection(db, "adoptionRecords");
    qry = query(
      ref,
      where("adoptionFee", ">=", 100),
      where("adoptionFee", "<=", 200)
    );
  } else if (queryId.value === "2") {
    queryTitle.value = "Premium Owners Who live in Springfield and Hamtramck";
    const ref = collection(db, "owners");
    qry = query(
      ref,
      where("isPremiumMember", "==", true),
      where("contact.city", "in", ["Springfield", "Hamtramck"])
    );
  } else if (queryId.value === "3") {
    queryTitle.value = "Total Number of Standard Members in Our Shelter";
    const ref = collection(db, "owners");
    qry = query(ref, where("isPremiumMember", "==", false));
    const snapshot = await getCountFromServer(qry);
    info.value = snapshot.data().count;
    return;
  } else if (queryId.value === "4") {
    queryTitle.value = "Sort Dogs by Birth Date";
    const ref = collection(db, "pets");
    qry = query(ref, where("type", "==", "dog"), orderBy("birthDate", "asc"));
  } else if (queryId.value === "5") {
    queryTitle.value = "Most Recently Adopted 3 Pets";
    const ref = collection(db, "adoptionRecords");
    qry = query(ref, orderBy("adoptionDate", "desc"), limit(3));
  }

  const snapshot = await getDocs(qry);
  snapshot.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();
    info.value.push({ id, ...data });
  });
};

watch(
  () => route.params.queryId,
  (newQueryId) => {
    queryId.value = newQueryId;
    getQueryResults();
  }
);

const viewPetDetails = (pet) => {
  props.pets.forEach((p) => {
    console.log(p.name);
    pet.forEach((pAdopt) => {
      if (pAdopt.name === p.name) {
        router.push({ name: "PetDetail", params: { petId: p.id } });
      }
    });
  });
};

onMounted(async () => {
  getQueryResults();
});
</script>

<template>
  <p class="text-left text-xl text-[#4b8ea9] font-bold mb-6">
    {{ queryTitle }}
  </p>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="pets">
    <!-- Query 1 ,  Query 5 -->
    <div
      v-if="queryId === '1' || queryId === '5'"
      v-for="adoption in info"
      :key="adoption.id"
      class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow transform hover:scale-105 relative cursor-pointer"
      @click="viewPetDetails(adoption.pet)"
    >
      <div v-for="p in adoption.pet">
        <div>
          <img
            :src="p.photo"
            :alt="p.name"
            class="w-full h-56 object-cover rounded-t-lg mb-4"
          />
        </div>
        <h2 class="text-xl font-bold text-[#4b8ea9]">{{ p.name }}</h2>
        <p class="text-gray-700">Breed: {{ p.breed }}</p>
      </div>
      <div>
        <p class="text-gray-700">
          Adoption Date:
          {{
            adoption.adoptionDate.toDate().toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
          }}
        </p>
        <p class="text-gray-700">Adoption Fee: ${{ adoption.adoptionFee }}</p>
      </div>
      <div
        v-if="adoption.owner.name"
        class="absolute top-4 right-4 bg-pink-400 text-white text-xs font-semibold px-3 py-1 scale-110 rounded-full shadow-md flex items-center space-x-2 animate-sparkle"
      >
        <span>Adopted!</span>
      </div>
    </div>
    <!-- Query 2 -->
    <div v-if="queryId === '2'" v-for="owner in info" :key="owner.id">
      <div
        :key="owner.id"
        class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow transform hover:scale-105 relative cursor-pointer"
      >
        <div class="flex items-center space-x-4 mb-4">
          <img
            src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"
            alt="Owner Photo"
            class="w-20 h-20 object-cover rounded-full shadow-md"
          />
          <div>
            <h2 class="text-2xl font-semibold text-[#4b8ea9]">
              {{ owner.ownerName }}
            </h2>
            <p class="text-sm text-gray-500">
              {{ owner.isPremiumMember ? "Premium Member" : "Standard Member" }}
            </p>
          </div>
        </div>
        <hr class="my-2 border-t-1 border-gray-300 relative w-full h-full" />
        <div class="space-y-2">
          <p class="text-gray-700 font-medium">Phone:</p>
          <p class="text-gray-600">{{ owner.contact.phone }}</p>
          <p class="text-gray-700 font-medium">Email:</p>
          <p class="text-gray-600">{{ owner.contact.email }}</p>
          <p class="text-gray-700 font-medium">City:</p>
          <p class="text-gray-600">{{ owner.contact.city }}</p>
          <p class="text-gray-700 font-medium">Adopted PetID:</p>
          <p class="text-gray-600">{{ owner.petId.join(", ") }}</p>
        </div>
        <div
          v-if="owner.isPremiumMember"
          class="absolute top-4 right-4 bg-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"
        >
          Premium
        </div>
      </div>
    </div>
    <!-- Query 3 -->
    <div v-if="queryId === '3'" class="bg-white rounded-lg shadow-lg p-6">
      <p class="text-2xl font-semibold text-[#4b8ea9]">Total Pets Adopted</p>
      <p class="text-4xl font-bold text-[#4b8ea9]">{{ info }}</p>
    </div>
    <!-- Query 4 -->
    <div
      v-if="queryId === '4'"
      v-for="pet in info"
      :key="pet.id"
      class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow transform hover:scale-105 relative cursor-pointer"
      @click="router.push({ name: 'PetDetail', params: { petId: pet.id } })"
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
      <div
        v-if="pet.ownerId"
        class="absolute top-4 right-4 bg-pink-400 text-white text-xs font-semibold px-3 py-1 scale-110 rounded-full shadow-md flex items-center space-x-2 animate-sparkle"
      >
        <span>Adopted!</span>
      </div>
    </div>
  </div>
</template>
