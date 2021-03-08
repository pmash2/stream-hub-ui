<template>
  <div class="main-page">
      <top-menu :items="menuItems"/>
  </div>
</template>

<script>
import topMenu from './components/topMenu'

export default {
  name: 'main-page',
  components: {
      topMenu,
  },
  data: function () {
      return {
        menuItems: [
            {
                link: "/about",
                name: "About",
            },
            {
                link: "/",
                name: "Home",
            },
            {
                link: "/static-commands",
                name: "Static Commands",
            },
        ]
      }
  }
}
</script>

<style lang="scss">
    .main-page {
        display: flex;
        flex-flow: row wrap;
        align-content: center;
        justify-content: center;

        &__btn {
            color: greenyellow;
            margin-left: 10px;
        }

        &__btn:first-child {
            color: blueviolet;
            margin-left: 0;
        }
    }
</style>