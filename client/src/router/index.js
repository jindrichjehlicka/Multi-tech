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
    },

    {
      path: '/profile',
      name: 'profile',
      component: Profile,

    },
    {
      path: '/products/create',
      name: 'products-create',
      component: CreateProduct,

    },
    {
      path: '/products',
      name: 'products',
      component: Products,

    },

    {
      path: '/products/:productId',
      name: 'product',
      component: ViewProduct,

    },
    {
      path: '/products/:productId/edit',
      name: 'product-edit',
      component: EditProduct,

    },

    {
      path: '/users',
      name: 'users',
      component: Users,

    },
    {
      path: '/manuals',
      name: 'manuals',
      component: Manuals,

    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,

    },
    {
      path: '/admin/products',
      name: 'admin-products',
      component: AdminProducts,

    },
    {
      path: '/users/:userId',
      name: 'user',
      component: ViewUser,

    },
    {
      path: '/users/:userId/edit',
      name: 'user-edit',
      component: EditUser,

    },
    {
      path: '*',
      redirect: 'root'
    }




  ],
});
