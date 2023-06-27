import {
  RouteRecordRaw,
  Router,
  createRouter,
  createWebHistory,
} from "vue-router";
import AlbumsPage from '../views/AlbumsPage.vue';
import PostsPage from '../views/PostsPage.vue';
import TasksPage from '../views/TasksPage.vue';

const routes: Array<RouteRecordRaw> = [
  { 
    path: "/",
    name: 'posts-page',
    component: PostsPage
  },
  { 
    path: "/photos",
    name: 'albums-page',
    component: AlbumsPage,
  },
  { 
    path: "/tasks",
    name: 'tasks-page',
    component: TasksPage,
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;