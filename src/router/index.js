import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '@/views/SignUp.vue'
import BizeUlasin from '@/views/BizeUlasin.vue'
import IletisemForm from '@/components/contact_us/IletisemForm.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp
  },
  {
    path: '/bize-ulasin',
    name: 'bize-ulasin',
    component: BizeUlasin
  },
  {
    path: '/bize-ulasin/Iletisem-form',
    name: '/bize-ulasin/Iletisem-form',
    component: IletisemForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
