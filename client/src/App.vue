
<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer app clipped disable-resize-watcher disable-route-watcher v-model="drawer" fixed :width="300" class="indigo darken-3" dark>
        <v-list dense class="indigo darken-3">
          <v-subheader>Menu</v-subheader>
          <v-divider></v-divider>
          <v-list-tile exact v-for="item in menuItems" :key="item.title" :to="item.link" id="whatever">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{ item.title }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-if="$store.state.isUserLoggedIn" target="_blank" @click="logout">
            <v-list-tile-action>
              <i class="fa fa-sign-out" aria-hidden="true"></i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Sign Out</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-subheader v-if="this.$store.state.isUserLoggedIn && this.$store.state.user.admin ===1" class="mt-5">Admin menu</v-subheader>
          <v-divider v-if="this.$store.state.isUserLoggedIn && this.$store.state.user.admin ===1"></v-divider>
          <v-list-tile exact v-for="item in items" :key="item.title" :to="item.link">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{ item.title }}</v-list-tile-content>
          </v-list-tile>

          <v-list-tile class="mt-5 pt-5 " @click="externalLink">

            <v-list-tile-action>
              <i class="fa fa-external-link" aria-hidden="true"></i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Go to
                <a id="multitech">Multitechwa</a>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar app dark fixed flat class="indigo darken-3">
        <v-toolbar-side-icon large @click.stop="drawer = !drawer" v-if="!drawer">
          <v-icon medium class="mb-1">fa-bars</v-icon>
        </v-toolbar-side-icon>
        <v-toolbar-side-icon large @click.stop="drawer = !drawer" v-if="drawer">
          <v-icon medium class="mb-1">fa-times</v-icon>
        </v-toolbar-side-icon>
        <v-toolbar-title id="title">

          <router-link class="home" tag="span" style="cursor: pointer" :to="{name: 'root'}">
            Multi-tech
          </router-link><br/>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-menu v-if="this.$store.state.isUserLoggedIn && this.$store.state.user.admin ===1" top right transition="slide-x-transition">
          <v-btn class=" pr-2 pl-1 orange " slot="activator" dark>
            <v-icon>arrow_drop_down</v-icon>
            <span>Admin</span>
          </v-btn>
          <v-list>
            <v-list-tile v-for="item in items" :key="item.title" :to="item.link">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-toolbar-items class="hidden-sm-and-down">

          <v-btn class="pr-3 pl-3" flat v-for="item in menuItems" :key="item.title" :to="item.link">

            {{ item.title }}

          </v-btn>

          <v-btn class="button" v-if="$store.state.isUserLoggedIn" flat dark @click="logout" :ripple="false">
            <!-- TODO:refactor later -->
            Sign out
          </v-btn>

        </v-toolbar-items>

      </v-toolbar>
      <v-container fluid>
        <v-content>

          <router-view> </router-view>

        </v-content>
      </v-container>
      <v-footer absolute class="pa-3">
        <v-spacer></v-spacer>
        © {{ new Date().getFullYear() }}
      </v-footer>
    </v-app>

  </div>
</template>

<script>
import UsersService from "@/services/UsersService";
export default {
  name: "app",
  data: () => ({
    drawer: false
  }),
  props: {
    source: String
  },
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "fa-sign-in", title: "Sign in", link: "/login" },
        { icon: "fa-user-plus", title: "Sign up", link: "/register" }
      ];
      if (this.$store.state.isUserLoggedIn) {
        menuItems = [
          { icon: "fa-shopping-cart", title: "My products", link: "/manuals" },
          { icon: "fa-user", title: "Profile", link: "/profile" },
          { icon: "fa-phone", title: "Support", link: "/support" }
        ];
      }

      return menuItems;
    },
    items() {
      let items = [];
      if (
        this.$store.state.isUserLoggedIn &&
        this.$store.state.user.admin === 1
      ) {
        items = [
          { icon: "fa-address-book", title: "Users", link: "/users" },
          { icon: "fa-phone", title: "All products", link: "/admin/products" }
        ];
      }
      return items;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "root"
      });
    },
    externalLink() {
      window.open("http://www.multitechwa.com", "_blank");
    }
  }
};
</script>

<style>
#app {
  font-family: "Open sans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#title:hover {
  color: #f5f5f5;
}
#whatever:visited {
  color: #fff;
}

.bars {
  border: 2px solid;
}

#drawer {
  width: 230px;
}
</style>
