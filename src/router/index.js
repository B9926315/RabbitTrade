import {createRouter, createWebHistory} from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    //配置具体路由规则
    routes: [{
        path: '/',
        name: '首页',
        component: Layout,
        children: [{
            path: '',
            component: Home,
            name: 'Home页'
        }, {
            path: 'category/:id',
            component: Category,
            name: '分类页面'
        }, {
            path: 'category/sub/:id',
            component: SubCategory,
            name: '二级分类页面'
        }, {
            path: 'detail/:id',
            component: Detail,
            name:'商品详情'
        },{
            path:'cartlist',
            component:CartList,
            name:'购物车'
        }
        ]
    }, {
        path: '/login',
        name: '登录页',
        component: Login
    }],
    //路由行为滚动定制，切换页面，滚动条总在最上面
    scrollBehavior() {
        return {
            top: 0
        }
    }
})
export default router