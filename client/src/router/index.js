import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Products from '@/components/Products';
import Profile from '@/components/Profile';
import Support from '@/components/Support';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Hello,
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
      path: '/products',
      name: 'products',
      component: Products,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },

    
   

  ],
});
