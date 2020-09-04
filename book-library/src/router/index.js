import Vue from "vue"
import VueRouter from "vue-router"
import BookList from "../components/BookList"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "home",
        component: BookList
    },
    {
        path: "/list",
        name: "List",
        component: BookList
    },
    {
        path: "/new",
        name: "New",
        component: ()=> import ("../components/NewBook.vue")
    }        
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router