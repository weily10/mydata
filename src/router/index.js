import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/backstage/Login.vue'
 import SearchStatus from '../pages/backstage/SearchStatus.vue'
import DetailPage from '../pages/backstage/DetailPage.vue'
import ChoosenService from '../pages/citizen/ChooseService.vue'
import Status from '../pages/citizen/Status.vue'
import Appliance from '../pages/citizen/Appliance.vue'
import ClientLogin from '../pages/citizen/ClientLogin.vue'
import ChooseData from '../pages/citizen/ChooseData.vue'
 import Authentication from '../pages/citizen/Authentication.vue'
import ApplianceDone from '../pages/citizen/ApplianceDone.vue'
import ModuleManagement from '../pages/backstage/ModuleManagement.vue'
import SPForm from '../pages/sp/Form.vue'
import SPMyData from '../pages/sp/MyData.vue'
import MyData from '../pages/citizen/MyData.vue'
import SPAGreement from '../pages/sp/Agreement.vue'



import axios from 'axios'
import Cookies from 'js-cookie'

const routes = [
    {
        path: "/",
        name: "ChoosenService",
        component: ChoosenService,
    },
    {
        path: "/admin/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/admin",
        name: "SearchStatus",
        component: SearchStatus,
    },
    {
        path: "/admin/detailPage",
        name: "DetailPage",
        component: DetailPage,

    },
    {
        path: "/status",
        name: "Status",
        component: Status,

    },
    {
        path: "/appliance",
        name: "Appliance",
        component: Appliance,

    },
    {
        path: "/clientlogin",
        name: "ClientLogin",
        component: ClientLogin,

    },
    {
        path: "/choosedata",
        name: "ChooseData",
        component: ChooseData,

    },
    {
        path: "/auth",
        name: "Authentication",
        component: Authentication,

    },
    {
        path: "/applianceDone",
        name: "ApplianceDone",
        component: ApplianceDone,
    },
    {
        path: "/admin/module-management",
        name: "ModuleManagement",
        component: ModuleManagement,
    },
    {
        path: "/sp-form",
        name: "SPForm",
        component: SPForm,
    },
    {
        path: "/mydata",
        name: "MyData",
        component: MyData,
    },
    {
        path: "/sp-mydata",
        name: "SPMyData",
        component: SPMyData,
    },
    {
        path: "/sp-agreement",
        name: "SPAGreement",
        component: SPAGreement,
    }

    
    


]

const history = createWebHistory();
const adminRouter = createRouter({
    history,
    routes
})



// router.beforeEach((to, from, next) => {

//     const isAuth = Cookies.get('UdnAiPlatform_Judge')
//     // document.title = to.meta.title;
//     if (to.meta.auth && !isAuth) {
//         next('/login')
//     } else {
//         next()
//     }

// })


export default adminRouter