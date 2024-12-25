<script setup>
import { onMounted, ref } from "vue";
import { query, collection, getDocs } from "firebase/firestore";
import db from "../firebase/init.js";
import { useRoute } from "vue-router";
import Header from "@/assets/component/Header.vue";

const pet = ref({});
const petName = ref("");
const adoptionRecord = ref({});
const ownerDetails = ref({});
const showOwnerDetailsSide = ref(false);

const getPet = async (petId) => {
  const petsCollection = collection(db, "pets");
  const petSnapshot = await getDocs(query(petsCollection));
  petSnapshot.forEach((doc) => {
    if (doc.id === petId) {
      let id = doc.id;
      let data = doc.data();
      petName.value = data.name;
      pet.value = { id, ...data };
    }
  });
};

const getAdoptionRecord = async () => {
  const adoptionRecordCollection = collection(db, "adoptionRecords");
  const adoptionRecordSnapshot = await getDocs(query(adoptionRecordCollection));
  adoptionRecordSnapshot.forEach((doc) => {
    const petArr = doc.data().pet;
    petArr.forEach((pet) => {
      if (pet.name === petName.value) {
        adoptionRecord.value = doc.data();
      }
    });
  });
};

const getOwnerDetails = async (petId) => {
  const ownerCollection = collection(db, "owners");
  const ownerSnapshot = await getDocs(query(ownerCollection));
  ownerSnapshot.forEach((doc) => {
    const petArr = doc.data().petId;
    petArr.forEach((pet) => {
      if (pet === petId) {
        ownerDetails.value = doc.data();
      }
    });
  });
};

onMounted(() => {
  const route = useRoute();
  const petId = route.params.petId;
  getPet(petId);
  getAdoptionRecord();
  getOwnerDetails(petId);
});

const showOwnerDetails = () => {
  showOwnerDetailsSide.value = !showOwnerDetailsSide.value;
};
</script>

<template>
  <Header />
  <div
    :class="{
      'grid lg:grid-cols-4 gap-6': showOwnerDetailsSide,
      'grid lg:grid-cols-1': !showOwnerDetailsSide,
    }"
    class="p-6"
  >
    <div class="bg-white p-10 rounded-2xl shadow-xl col-span-3 flex flex-col">
      <h2 class="text-4xl font-extrabold text-center text-[#4b8ea9] mb-10">
        {{ pet.name }}'s Details
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="flex justify-center items-center flex-col space-y-4">
          <img
            :src="pet.photo"
            :alt="pet.name"
            class="w-full lg:w-96 h-80 object-cover rounded-lg shadow-xl"
          />

          <button
            v-if="!pet.ownerId"
            class="px-6 py-3 bg-blue-500 text-white rounded-2xl shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact us to know more about {{ pet.name }}
          </button>
        </div>

        <div class="bg-[#f0f8ff] p-6 rounded-lg shadow-md space-y-8">
          <h3 class="text-2xl font-bold text-[#4b8ea9] mb-4">Pet Details</h3>

          <div class="grid grid-cols-2 gap-x-6 gap-y-4">
            <p class="text-lg">
              <span class="font-semibold text-[#4b8ea9]">Breed: </span>
              <span class="font-medium text-gray-800">{{ pet.breed }}</span>
            </p>
            <p class="text-lg">
              <span class="font-semibold text-[#4b8ea9]">Type: </span>
              <span class="font-medium text-gray-800">{{ pet.type }}</span>
            </p>
            <p class="text-lg">
              <span class="font-semibold text-[#4b8ea9]">Birth Date: </span>
              <span class="font-medium text-gray-800">
                {{
                  pet.birthDate?.toDate().toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                }}
              </span>
            </p>
            <p class="text-lg">
              <span class="font-semibold text-[#4b8ea9]">Vaccinated: </span>
              <span
                class="font-medium"
                :class="pet.vaccinated ? 'text-green-600' : 'text-red-600'"
              >
                {{ pet.vaccinated ? "Yes" : "No" }}
              </span>
            </p>
          </div>

          <div class="space-y-2">
            <h3 class="text-2xl font-bold text-[#4b8ea9]">Health Details</h3>
            <p class="text-lg">
              <span class="font-semibold text-[#4b8ea9]">Weight: </span>
              <span>{{ pet.healthDetails?.weight || "N/A" }} lbs</span>
            </p>
            <p class="text-lg">
              <span class="font-semibold text-[#4b8ea9]">Spayed: </span>
              <span>{{ pet.healthDetails?.spayed ? "Yes" : "No" }}</span>
            </p>
          </div>

          <div class="space-y-2">
            <h3 class="text-2xl font-bold text-[#4b8ea9]">Medical History</h3>
            <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li
                v-for="record in pet.healthDetails?.medicalHistory"
                :key="record.date"
              >
                <span class="font-semibold">{{ record.condition }}:</span>
                {{
                  record.date?.toDate().toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                }}
              </li>
            </ul>
          </div>

          <div class="pt-6 border-t space-y-4">
            <h3 class="text-2xl font-bold text-[#4b8ea9]">Adoption Record</h3>
            <div class="flex items-center text-gray-800 text-lg">
              <span class="font-semibold text-[#4b8ea9] mr-2">Adopted by:</span>
              <div v-if="ownerDetails.ownerName">
                <span
                  @click="showOwnerDetails"
                  class="text-[#4b8ea9] underline cursor-pointer hover:text-[#2c6e8f] transition-colors"
                >
                  {{ ownerDetails.ownerName }}
                </span>
                <span class="ml-2 text-sm text-gray-500"
                  >(view owner details)</span
                >
              </div>
              <div v-else>
                <span class="text-gray-500">Not Adopted Yet</span>
              </div>
            </div>
            <p class="text-lg">
              <span class="font-semibold text-[#4b8ea9]">Adopted on:</span>
              {{
                adoptionRecord.adoptionDate
                  ?.toDate()
                  .toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }) || "N/A"
              }}
            </p>
            <p class="text-lg">
              <span class="font-semibold text-[#4b8ea9]">Adoption Fee:</span>
              {{
                adoptionRecord.adoptionFee
                  ? `$ ${adoptionRecord.adoptionFee}`
                  : "Please contact us for further details"
              }}
            </p>
            <p class="text-lg">
              <span class="font-semibold text-[#4b8ea9]">Payment Method:</span>
              {{ adoptionRecord.paymentMethod || "N/A" }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="showOwnerDetailsSide"
      class="bg-white p-8 rounded-2xl shadow-xl col-span-1 sm:col-span-3 lg:col-span-1 space-y-6"
    >
      <h2 class="text-3xl font-extrabold text-center text-[#4b8ea9] mb-6">
        Owner's Details
      </h2>

      <div class="space-y-4">
        <div class="flex items-start gap-4">
          <span class="w-20 font-semibold text-[#4b8ea9]">Name:</span>
          <span class="text-gray-800">{{
            ownerDetails.ownerName || "N/A"
          }}</span>
        </div>
        <div class="flex items-start gap-4">
          <span class="w-20 font-semibold text-[#4b8ea9]">Phone:</span>
          <span class="text-gray-800">{{
            ownerDetails.contact?.phone || "N/A"
          }}</span>
        </div>
        <div class="flex items-start gap-4">
          <span class="w-20 font-semibold text-[#4b8ea9]">Email:</span>
          <span class="text-gray-800">{{
            ownerDetails.contact?.email || "N/A"
          }}</span>
        </div>
        <div class="flex items-start gap-4">
          <span class="w-20 font-semibold text-[#4b8ea9]">City:</span>
          <span class="text-gray-800">{{
            ownerDetails.contact?.city || "N/A"
          }}</span>
        </div>
      </div>

      <div v-if="showOwnerDetailsSide" class="flex justify-center mt-6">
        <img
          src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"
          alt="Owner Photo"
          class="w-32 h-32 object-cover rounded-full shadow-md"
        />
      </div>
    </div>
  </div>
</template>
