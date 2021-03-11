<template>
  <div id="app">
    <md-app>
      <md-app-drawer md-permanent="full">
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
        <router-view/>
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
        ]
      }
  }
}
</script>

<style lang="scss">
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
</style>
