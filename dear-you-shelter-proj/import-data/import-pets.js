const { getFirestore } = require("firebase-admin/firestore");
var admin = require("firebase-admin");
var firebase = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

var db = getFirestore();

var pets = [
  {
    petId: "pet-1",
    name: "Buddy",
    type: "dog",
    breed: "Mixed Breed",
    birthDate: firebase.firestore.Timestamp.fromDate(
      new Date("2022-01-10T00:00:00Z")
    ),
    vaccinated: true,
    healthDetails: {
      weight: 25.5,
      spayed: true,
      allergies: null,
      medicalHistory: [
        {
          condition: "None",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2023-01-15T00:00:00Z")
          ),
        },
        {
          condition: "None",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2023-07-15T00:00:00Z")
          ),
        },
        {
          condition: "Ear Infection",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2024-04-05T00:00:00Z")
          ),
        },
      ],
    },
    ownerId: "owner-1",
    photo: "/pics/buddy-dog.jpg",
    overview:
      "Buddy is a playful and curious young pup who loves to explore. He's always up for a good game of fetch and enjoys cuddles after a long run!",
  },
  {
    petId: "pet-2",
    name: "Milo",
    type: "cat",
    breed: "Domestic Shorthair",
    birthDate: firebase.firestore.Timestamp.fromDate(
      new Date("2023-02-20T00:00:00Z")
    ),
    vaccinated: true,
    healthDetails: {
      weight: 5.2,
      spayed: true,
      allergies: "Pollen",
      medicalHistory: [
        {
          condition: "None",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2024-03-15T00:00:00Z")
          ),
        },
      ],
    },
    ownerId: "owner-2",
    photo: "/pics/milo-cat.jpeg",
    overview:
      "Milo is a playful kitten with a big heart. She loves chasing toys and curling up with her favorite humans for a nap.",
  },
  {
    petId: "pet-3",
    name: "Luna",
    type: "dog",
    breed: "Beagle",
    birthDate: firebase.firestore.Timestamp.fromDate(
      new Date("2021-03-15T00:00:00Z")
    ),
    vaccinated: true,
    healthDetails: {
      weight: 12.5,
      spayed: false,
      allergies: "Grain",
      medicalHistory: [
        {
          condition: "None",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2022-07-05T00:00:00Z")
          ),
        },
        {
          condition: "None",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2023-02-16T00:00:00Z")
          ),
        },
        {
          condition: "None",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2023-07-09T00:00:00Z")
          ),
        },
      ],
    },
    ownerId: "owner-3",
    photo: "/pics/luna-dog.JPG",
    overview:
      "Luna is a sweet Beagle who loves to sniff around and explore. She's very friendly and enjoys running through the park!",
  },
  {
    petId: "pet-4",
    name: "Rocky",
    type: "cat",
    breed: "Tabby",
    birthDate: firebase.firestore.Timestamp.fromDate(
      new Date("2022-07-10T00:00:00Z")
    ),
    vaccinated: true,
    healthDetails: {
      weight: 6.3,
      spayed: true,
      allergies: null,
      medicalHistory: [
        {
          condition: "Dental issue",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2024-07-15T00:00:00Z")
          ),
        },
      ],
    },
    ownerId: "owner-4",
    photo: "/pics/rocky-cat.jpg",
    overview:
      "Rocky is a calm and loving cat who enjoys sunbathing and lounging around the house. He's a great companion for relaxing days.",
  },
  {
    petId: "pet-5",
    name: "Bella",
    type: "cat",
    breed: "Maine Coon",
    birthDate: firebase.firestore.Timestamp.fromDate(
      new Date("2021-03-10T09:00:00Z")
    ),
    vaccinated: true,
    healthDetails: {
      weight: 8.2,
      spayed: true,
      allergies: null,
      medicalHistory: [
        {
          condition: "None",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2024-03-10T00:00:00Z")
          ),
        },
      ],
    },
    ownerId: "owner-5",
    photo: "/pics/bella-cat.png",
    overview:
      "Bella is a friendly and affectionate Maine Coon. She loves cuddles and is always looking for attention from her favorite humans.",
  },
  {
    petId: "pet-6",
    name: "Zoe",
    type: "dog",
    breed: "Shih Tzu",
    birthDate: firebase.firestore.Timestamp.fromDate(
      new Date("2023-06-12T00:00:00Z")
    ),
    vaccinated: true,
    healthDetails: {
      weight: 5.5,
      spayed: true,
      allergies: null,
      medicalHistory: [
        {
          condition: "None",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2024-08-01T00:00:00Z")
          ),
        },
      ],
    },
    ownerId: "owner-6", 
    photo: "/pics/zoe-dog.png",
    overview:
      "Zoe is an adorable Shih Tzu who loves to run around and play. She’s the perfect cuddle buddy after a day of fun!",
  },
  {
    petId: "pet-7",
    name: "Charlie",
    type: "dog",
    breed: "Collie",
    birthDate: firebase.firestore.Timestamp.fromDate(
      new Date("2024-04-05T00:00:00Z")
    ),
    vaccinated: true,
    healthDetails: {
      weight: 20.4,
      spayed: false,
      allergies: null,
      medicalHistory: [
        {
          condition: "None",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2024-04-10T00:00:00Z")
          ),
        },
      ],
    },
    ownerId: "owner-7", // Corrected to match ownerId
    photo: "/pics/charlie-dog.jpg",
    overview:
      "Charlie is an energetic and loving Collie. He enjoys long walks and is always happy to meet new people!",
  },
  {
    petId: "pet-8",
    name: "Whiskers",
    type: "cat",
    breed: "Domestic Longhair",
    birthDate: firebase.firestore.Timestamp.fromDate(
      new Date("2023-09-18T00:00:00Z")
    ),
    vaccinated: true,
    healthDetails: {
      weight: 7.1,
      spayed: true,
      allergies: null,
      medicalHistory: [
        {
          condition: "None",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2024-10-15T00:00:00Z")
          ),
        },
      ],
    },
    ownerId: "owner-8", // Corrected to match ownerId
    photo: "/pics/whiskers-cat.jpg",
    overview:
      "Whiskers is a gentle and playful cat. He loves to chase after string and is very affectionate with his human family.",
  },
  {
    petId: "pet-9",
    name: "Daisy",
    type: "dog",
    breed: "Poodle Mix",
    birthDate: firebase.firestore.Timestamp.fromDate(
      new Date("2022-11-22T00:00:00Z")
    ),
    vaccinated: true,
    healthDetails: {
      weight: 8.4,
      spayed: true,
      allergies: null,
      medicalHistory: [
        {
          condition: "None",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2024-01-10T00:00:00Z")
          ),
        },
      ],
    },
    ownerId: "owner-9", // Corrected to match ownerId
    photo: "/pics/daisy-dog.jpg",
    overview:
      "Daisy is a playful and loving Poodle Mix. She loves playing fetch and curling up with her family at the end of a fun-filled day.",
  },
  {
    petId: "pet-10",
    name: "Max",
    type: "dog",
    breed: "Labrador Retriever",
    birthDate: firebase.firestore.Timestamp.fromDate(
      new Date("2022-05-12T00:00:00Z")
    ),
    vaccinated: true,
    healthDetails: {
      weight: 30.5,
      spayed: true,
      allergies: "None",
      medicalHistory: [
        {
          condition: "None",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2024-06-01T00:00:00Z")
          ),
        },
      ],
    },
    ownerId: "owner-10", // Corrected to match ownerId
    photo: "/pics/max-dog.jpg",
    overview:
      "Max is a friendly and loyal Labrador. He loves swimming, playing fetch, and is always excited to meet new friends!",
  },

  {
    petId: "pet-11",
    name: "Cleo",
    type: "cat",
    breed: "Siamese",
    birthDate: firebase.firestore.Timestamp.fromDate(
      new Date("2023-03-15T00:00:00Z")
    ),
    vaccinated: true,
    healthDetails: {
      weight: 4.8,
      spayed: true,
      allergies: null,
      medicalHistory: [
        {
          condition: "None",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2024-05-20T00:00:00Z")
          ),
        },
      ],
    },
    ownerId: "owner-1",
    photo: "/pics/cleo-cat.jpg",
    overview:
      "Cleo is a graceful Siamese cat who loves attention and enjoys perching by windows to watch the world go by.",
  },
  {
    petId: "pet-12",
    name: "Jukkou",
    type: "dog",
    breed: "Chinese hotsell crested pug",
    birthDate: firebase.firestore.Timestamp.fromDate(
      new Date("2022-07-19T00:00:00Z")
    ),
    vaccinated: true,
    healthDetails: {
      weight: 23.7,
      spayed: true,
      allergies: null,
      medicalHistory: [
        {
          condition: "Skin Irritation",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2023-02-10T00:00:00Z")
          ),
        },
        {
          condition: "None",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2023-07-15T00:00:00Z")
          ),
        },
      ],
    },
    ownerId: null,
    photo: "/pics/jukkou-dog.jpg",
    overview:
      "Jukkou is a calm and friendly boy who enjoys lounging indoors and short walks around the neighborhood.",
  },
  {
    petId: "pet-13",
    name: "Lily",
    type: "cat",
    breed: "Russian Blue",
    birthDate: firebase.firestore.Timestamp.fromDate(
      new Date("2023-09-25T00:00:00Z")
    ),
    vaccinated: true,
    healthDetails: {
      weight: 6.1,
      spayed: true,
      allergies: null,
      medicalHistory: [
        {
          condition: "None",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2023-12-07T00:00:00Z")
          ),
        },
        {
          condition: "None",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2024-07-21T00:00:00Z")
          ),
        },
      ],
    },
    ownerId: null,
    photo: "/pics/lily-cat.jpeg",
    overview:
      "Lily is a quiet and elegant Russian Blue. She enjoys soft cushions and bonding with her favorite humans.",
  },
  {
    petId: "pet-14",
    name: "Toby",
    type: "dog",
    breed: "Corgi",
    birthDate: firebase.firestore.Timestamp.fromDate(
      new Date("2023-12-08T00:00:00Z")
    ),
    vaccinated: true,
    healthDetails: {
      weight: 11.4,
      spayed: false,
      allergies: null,
      medicalHistory: [
        {
          condition: "None",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2024-02-15T00:00:00Z")
          ),
        },
      ],
    },
    ownerId: null,
    photo: "/pics/toby-dog.jpg",
    overview:
      "Toby is an energetic and playful Corgi who loves running and herding anything he can find!",
  },
  {
    petId: "pet-15",
    name: "Mittens",
    type: "cat",
    breed: "Ragdoll",
    birthDate: firebase.firestore.Timestamp.fromDate(
      new Date("2023-04-01T00:00:00Z")
    ),
    vaccinated: true,
    healthDetails: {
      weight: 4.5,
      spayed: true,
      allergies: null,
      medicalHistory: [
        {
          condition: "None",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2024-06-10T00:00:00Z")
          ),
        },
      ],
    },
    ownerId: null,
    photo: "/pics/mittens-cat.jpg",
    overview:
      "Mittens is a gentle Ragdoll kitten who loves being carried around and purring on laps.",
  },
  {
    petId: "pet-16",
    name: "Oscar",
    type: "dog",
    breed: "German Shepherd",
    birthDate: firebase.firestore.Timestamp.fromDate(
      new Date("2021-11-15T00:00:00Z")
    ),
    vaccinated: true,
    healthDetails: {
      weight: 35.2,
      spayed: true,
      allergies: null,
      medicalHistory: [
        {
          condition: "None",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2020-01-10T00:00:00Z")
          ),
        },
      ],
    },
    ownerId: null,
    photo:
      "https://preview.redd.it/my-12-year-almost-13-years-old-gsds-back-legs-dont-want-to-v0-8efrvmtry78a1.jpg?width=1080&crop=smart&auto=webp&s=7bd2ca4cbb3d97016a810044274d39580ce54e1b",
    overview:
      "Oscar is a smart and obedient German Shepherd. He loves learning new tricks and protecting his family.",
  },
  {
    petId: "pet-17",
    name: "Snowball",
    type: "cat",
    breed: "Persian",
    birthDate: firebase.firestore.Timestamp.fromDate(
      new Date("2023-02-10T00:00:00Z")
    ),
    vaccinated: true,
    healthDetails: {
      weight: 5.7,
      spayed: true,
      allergies: null,
      medicalHistory: [
        {
          condition: "None",
          date: firebase.firestore.Timestamp.fromDate(
            new Date("2024-05-15T00:00:00Z")
          ),
        },
      ],
    },
    ownerId: null,
    photo: "/pics/snowball-cat.jpg",
    overview:
      "Snowball is a fluffy Persian cat who loves being groomed and enjoys lazy afternoons napping.",
  },
];

pets.forEach(function (obj) {
  db.collection("pets")
    .doc(obj.petId)
    .set({
      name: obj.name,
      type: obj.type,
      breed: obj.breed,
      birthDate: obj.birthDate,
      vaccinated: obj.vaccinated,
      healthDetails: obj.healthDetails,
      ownerId: obj.ownerId,
      photo: obj.photo,
      overview: obj.overview,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", obj.petId);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
