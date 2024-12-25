const { getFirestore } = require("firebase-admin/firestore");
var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

var db = getFirestore();

var owners = [
  {
    ownerId: "owner-1",
    ownerName: "Sarah Johnson",
    contact: {
      phone: "555-123-4567",
      email: "sarah.johnson@example.com",
      city: "Cleveland",
    },
    isPremiumMember: true,
    petId: ["pet-1", "pet-11"],
  },
  {
    ownerId: "owner-2",
    ownerName: "Michael Brown",
    contact: {
      phone: "555-987-6543",
      email: "michael.brown@example.com",
      city: "Hamtramck",
    },
    isPremiumMember: true,
    petId: ["pet-2"],
  },
  {
    ownerId: "owner-3",
    ownerName: "Emily Davis",
    contact: {
      phone: "555-654-3210",
      email: "emily.davis@example.com",
      city: "Cleveland",
    },
    isPremiumMember: false,
    petId: ["pet-3"],
  },
  {
    ownerId: "owner-4",
    ownerName: "William Smith",
    contact: {
      phone: "555-765-4321",
      email: "william.smith@example.com",
      city: "Hamtramck",
    },
    isPremiumMember: true,
    petId: ["pet-4"],
  },
  {
    ownerId: "owner-5",
    ownerName: "Olivia Johnson",
    contact: {
      phone: "555-333-2222",
      email: "olivia.johnson@example.com",
      city: "Springfield",
    },
    isPremiumMember: false,
    petId: ["pet-5"],
  },
  {
    ownerId: "owner-6",
    ownerName: "James Wilson",
    contact: {
      phone: "555-111-0000",
      email: "james.wilson@example.com",
      city: "Cleveland",
    },
    isPremiumMember: true,
    petId: ["pet-6"],
  },
  {
    ownerId: "owner-7",
    ownerName: "Sophia Martinez",
    contact: {
      phone: "555-444-5555",
      email: "sophia.martinez@example.com",
      city: "Hamtramck",
    },
    isPremiumMember: false,
    petId: ["pet-7"],
  },
  {
    ownerId: "owner-8",
    ownerName: "Liam Anderson",
    contact: {
      phone: "555-777-8888",
      email: "liam.anderson@example.com",
      city: "Hamtramck",
    },
    isPremiumMember: false,
    petId: ["pet-8"],
  },
  {
    ownerId: "owner-9",
    ownerName: "Mia Thompson",
    contact: {
      phone: "555-666-9999",
      email: "mia.thompson@example.com",
      city: "Springfield",
    },
    isPremiumMember: true,
    petId: ["pet-9"],
  },
  {
    ownerId: "owner-10",
    ownerName: "Ethan White",
    contact: {
      phone: "555-123-7890",
      email: "ethan.white@example.com",
      city: "Springfield",
    },
    isPremiumMember: false,
    petId: ["pet-10"],
  },
];

owners.forEach((obj) => {
  db.collection("owners")
    .doc(obj.ownerId)
    .set({
      ownerName: obj.ownerName,
      contact: obj.contact,
      isPremiumMember: obj.isPremiumMember,
      petId: obj.petId,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", obj.ownerId);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
});
