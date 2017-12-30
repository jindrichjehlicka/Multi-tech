/* eslint-disable  */
import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Root from '@/components/Root';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Products from '@/components/Products/Index';
import Manuals from '@/components/Manuals/Index';
import Profile from '@/components/Profile';
import Support from '@/components/Support';
import CreateProduct from '@/components/CreateProduct';
import ViewProduct from '@/components/ViewProduct/Index';
import EditProduct from '@/components/EditProduct';
import Users from '@/components/Admin/Users/Index';
import AdminProducts from '@/components/Admin/AllProducts/AdminIndex';
import Admin from '@/components/Admin/Index';
import EditUser from '@/components/EditUser';
import ViewUser from '@/components/ViewUser/Index';

import NavigationGuard from './NavigationGuard';
import NavigationGuardAdmin from './NavigationGuardAdmin';



Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'root',
      component: Root,
    },
    {
      path: '/home',
      name: 'home',
      component: Main,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      
      
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },

    {
      path: '/support',
      name: 'support',
      component: Support,
      beforeEnter: NavigationGuard
     
    },

    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: NavigationGuard

    },
    {
      path: '/products/create',
      name: 'products-create',
      component: CreateProduct,
      beforeEnter: NavigationGuardAdmin

    },
    {
      path: '/products',
      name: 'products',
      component: Products,
      beforeEnter: NavigationGuardAdmin

    },

    {
      path: '/products/:productId',
      name: 'product',
      component: ViewProduct,
      beforeEnter: NavigationGuardAdmin

    },
    {
      path: '/products/:productId/edit',
      name: 'product-edit',
      component: EditProduct,
      beforeEnter: NavigationGuardAdmin

    },

    {
      path: '/users',
      name: 'users',
      component: Users,
      beforeEnter: NavigationGuardAdmin

    },
    {
      path: '/manuals',
      name: 'manuals',
      component: Manuals,
      beforeEnter: NavigationGuard

    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      beforeEnter: NavigationGuardAdmin

    },
    {
      path: '/admin/products',
      name: 'admin-products',
      component: AdminProducts,
      beforeEnter: NavigationGuardAdmin

    },
    {
      path: '/users/:userId',
      name: 'user',
      component: ViewUser,
      beforeEnter: NavigationGuardAdmin

    },
    {
      path: '/users/:userId/edit',
      name: 'user-edit',
      component: EditUser,
      beforeEnter: NavigationGuardAdmin

    },
    {
      path: '*',
      redirect: 'root'
    }




  ],
});
