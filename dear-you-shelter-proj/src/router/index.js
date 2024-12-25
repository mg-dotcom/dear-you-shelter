import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PetDetailView from "../views/PetDetailView.vue";
import QueryView from "@/views/QueryView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/pet",
    },
    {
      path: "/pet",
      name: "Home",
      component: HomeView,
      children: [
        {
          path: "query/:queryId",
          name: "Query",
          component: QueryView,
        },
      ],
    },
    {
      path: "/pet/:petId",
      name: "PetDetail",
      component: PetDetailView,
    },
    {
      path: "/pet/adoption",
      name: "Adoption",
      component: HomeView,
    },
  ],
});

export default router;
