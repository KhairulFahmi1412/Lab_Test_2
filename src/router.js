import Vue from 'vue'
import Router from 'vue-router'
import AppContent from './components/AppContent.vue'
import AboutPage from './components/AboutPage.vue'
import ProfilePage from './components/ProfilePage.vue'
import PhotosPage from './components/PhotosPage.vue'
import SearchPage from '@/components/SearchPage.vue'; // Import SearchPage



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppContent
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage
    },
    {
      path: '/photos',
      name: 'photos',
      component: PhotosPage
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: SearchPage
    }
  ]
})