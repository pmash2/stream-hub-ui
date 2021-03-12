<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <md-app >
      <md-app-drawer md-permanent="full" v-show="menuVisible">
        <md-app-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-app-toolbar>

        <md-list>
          <md-list-item v-for="item in menuItems" :key="item.name">
            <md-icon>
              {{ item.icon }}
            </md-icon>
            <router-link :to="item.link">
              {{ item.name }}
            </router-link>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <div>
          <div v-on:click="toggleDrawer" class="z-50 absolute"><md-icon>list</md-icon></div>
          <router-view/>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  data: function () {
      return {
        menuItems: [
            {
                link: "/about",
                name: "About",
                icon: "save",
            },
            {
                link: "/",
                name: "Home",
                icon: "save",
            },
            {
                link: "/static-commands",
                name: "Static Commands",
                icon: "save",
            },
            {
                link: "/overlay",
                name: "Overlay",
                icon: "picture_in_picture_alt",
            },
        ],
        menuVisible: true,
      }
  },
  methods: {
    toggleDrawer: function () {
      this.menuVisible = !this.menuVisible;
    }
}
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// Demo purposes only
.md-drawer {
  width: 230px;
  //max-width: calc(100vw - 125px);
}
</style>
