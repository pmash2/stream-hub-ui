<template>
  <div class="top-menu">
      <router-link class="top-menu__btn" v-for="item in items" :key="item.name" :to="item.link">
          {{ item.name }}
     </router-link>
  </div>
</template>

<script>
export default {
  name: 'top-menu',
  props: {
      items: Array,
  }
}
</script>

<style lang="scss">
    .top-menu {
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