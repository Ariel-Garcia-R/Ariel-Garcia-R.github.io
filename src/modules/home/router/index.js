export default {
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/modules/home/layouts/HomeLayouts.vue'),
}