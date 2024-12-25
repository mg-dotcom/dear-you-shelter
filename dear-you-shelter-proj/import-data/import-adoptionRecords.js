const { getFirestore } = require("firebase-admin/firestore");
var admin = require("firebase-admin");
var firebase = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

var db = getFirestore();

var adoptionRecords = [
  {
    adoptionId: "adoptRecord-1",
    owner: {
      name: "Sarah Johnson",
      phone: "555-123-4567",
    },
    pet: [
      {
        name: "Buddy",
        type: "dog",
        breed: "Mixed Breed",
        birthDate: firebase.firestore.Timestamp.fromDate(
          new Date("2022-01-10T00:00:00Z")
        ),
        photo: "/pics/buddy-dog.jpg",
      },
    ],
    adoptionDate: firebase.firestore.Timestamp.fromDate(
      new Date("2024-06-01T10:00:00Z")
    ),
    adoptionFee: 100,
    paymentMethod: "credit card",
  },
  {
    adoptionId: "adoptRecord-2",
    owner: {
      name: "Michael Brown",
      phone: "555-987-6543",
    },
    pet: [
      {
        name: "Milo",
        type: "cat",
        breed: "Domestic Shorthair",
        birthDate: firebase.firestore.Timestamp.fromDate(
          new Date("2023-02-20T00:00:00Z")
        ),
        photo: "/pics/milo-cat.jpeg",
      },
    ],
    adoptionDate: firebase.firestore.Timestamp.fromDate(
      new Date("2024-08-15T14:00:00Z")
    ),
    adoptionFee: 80,
    paymentMethod: "debit card",
  },
  {
    adoptionId: "adoptRecord-3",
    owner: {
      name: "Emily Davis",
      phone: "555-654-3210",
    },
    pet: [
      {
        name: "Luna",
        type: "dog",
        breed: "Beagle",
        birthDate: firebase.firestore.Timestamp.fromDate(
          new Date("2021-03-15T00:00:00Z")
        ),
        photo: "/pics/luna-dog.JPG",
      },
    ],
    adoptionDate: firebase.firestore.Timestamp.fromDate(
      new Date("2024-05-10T11:30:00Z")
    ),
    adoptionFee: 120,
    paymentMethod: "cash",
  },
  {
    adoptionId: "adoptRecord-4",
    owner: {
      name: "William Smith",
      phone: "555-765-4321",
    },
    pet: [
      {
        name: "Rocky",
        type: "cat",
        breed: "Tabby",
        birthDate: firebase.firestore.Timestamp.fromDate(
          new Date("2022-07-10T00:00:00Z")
        ),
        photo: "/pics/rocky-cat.jpg",
      },
    ],
    adoptionDate: firebase.firestore.Timestamp.fromDate(
      new Date("2024-07-20T15:45:00Z")
    ),
    adoptionFee: 90,
    paymentMethod: "credit card",
  },
  {
    adoptionId: "adoptRecord-5",
    owner: {
      name: "Olivia Johnson",
      phone: "555-333-2222",
    },
    pet: [
      {
        name: "Bella",
        type: "cat",
        breed: "Maine Coon",
        birthDate: firebase.firestore.Timestamp.fromDate(
          new Date("2021-03-10T00:00:00Z")
        ),
        photo: "/pics/bella-cat.png",
      },
    ],
    adoptionDate: firebase.firestore.Timestamp.fromDate(
      new Date("2024-09-05T00:00:00Z")
    ),
    adoptionFee: 110,
    paymentMethod: "debit card",
  },
  {
    adoptionId: "adoptRecord-6",
    owner: {
      name: "James Wilson",
      phone: "555-111-0000",
    },
    pet: [
      {
        name: "Zoe",
        type: "dog",
        breed: "Shih Tzu",
        birthDate: firebase.firestore.Timestamp.fromDate(
          new Date("2023-06-12T00:00:00Z")
        ),
        photo: "/pics/zoe-dog.png",
      },
    ],
    adoptionDate: firebase.firestore.Timestamp.fromDate(
      new Date("2024-10-12T13:00:00Z")
    ),
    adoptionFee: 95,
    paymentMethod: "cash",
  },
  {
    adoptionId: "adoptRecord-7",
    owner: {
      name: "Sophia Martinez",
      phone: "555-444-5555",
    },
    pet: [
      {
        name: "Charlie",
        type: "dog",
        breed: "Collie",
        birthDate: firebase.firestore.Timestamp.fromDate(
          new Date("2024-04-05T00:00:00Z")
        ),
        photo: "/pics/charlie-dog.jpg",
      },
    ],
    adoptionDate: firebase.firestore.Timestamp.fromDate(
      new Date("2024-11-01T16:30:00Z")
    ),
    adoptionFee: 85,
    paymentMethod: "credit card",
  },
  {
    adoptionId: "adoptRecord-8",
    owner: {
      name: "Liam Anderson",
      phone: "555-777-8888",
    },
    pet: [
      {
        name: "Whiskers",
        type: "cat",
        breed: "Domestic Longhair",
        birthDate: firebase.firestore.Timestamp.fromDate(
          new Date("2023-09-18T00:00:00Z")
        ),
        photo: "/pics/whiskers-cat.jpg",
      },
    ],
    adoptionDate: firebase.firestore.Timestamp.fromDate(
      new Date("2024-12-01T17:45:00Z")
    ),
    adoptionFee: 75,
    paymentMethod: "debit card",
  },
  {
    adoptionId: "adoptRecord-9",
    owner: {
      name: "Mia Thompson",
      phone: "555-666-9999",
    },
    pet: [
      {
        name: "Daisy",
        type: "dog",
        breed: "Poodle Mix",
        birthDate: firebase.firestore.Timestamp.fromDate(
          new Date("2022-11-22T00:00:00Z")
        ),
        photo: "/pics/daisy-dog.jpg",
      },
    ],
    adoptionDate: firebase.firestore.Timestamp.fromDate(
      new Date("2024-10-05T08:15:00Z")
    ),
    adoptionFee: 130,
    paymentMethod: "cash",
  },
  {
    adoptionId: "adoptRecord-10",
    owner: {
      name: "Ethan White",
      phone: "555-123-7890",
    },
    pet: [
      {
        name: "Max",
        type: "dog",
        breed: "Labrador Retriever",
        birthDate: firebase.firestore.Timestamp.fromDate(
          new Date("2022-05-12T00:00:00Z")
        ),
        photo: "/pics/max-dog.jpg",
      },
    ],
    adoptionDate: firebase.firestore.Timestamp.fromDate(
      new Date("2024-06-25T00:00:00Z")
    ),
    adoptionFee: 150,
    paymentMethod: "credit card",
  },
  {
    adoptionId: "adoptRecord-11",
    owner: {
      name: "Sarah Johnson",
      phone: "555-123-4567",
    },
    pet: [
      {
        name: "Cleo",
        type: "cat",
        breed: "Siamese",
        birthDate: firebase.firestore.Timestamp.fromDate(
          new Date("2023-03-15T00:00:00Z")
        ),
        photo: "/pics/cleo-cat.jpg",
      },
    ],
    adoptionDate: firebase.firestore.Timestamp.fromDate(
      new Date("2024-07-05T09:30:00Z")
    ),
    adoptionFee: 85,
    paymentMethod: "credit card",
  },
];

adoptionRecords.forEach((obj) => {
  db.collection("adoptionRecords")
    .doc(obj.adoptionId)
    .set({
      owner: obj.owner,
      pet: obj.pet,
      adoptionDate: obj.adoptionDate,

      adoptionFee: obj.adoptionFee,
      paymentMethod: obj.paymentMethod,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", obj.adoptionId);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
