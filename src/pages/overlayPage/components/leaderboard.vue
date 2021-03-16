<template>
  <div>
    <md-list class="bg-gray-400">
      <md-subheader class="bg-yellow-400 text-center">Leaderboard</md-subheader>
      <md-list-item v-for="user in users" :key="user.name">
        <md-avatar>
          <img src="@/assets/logo.png" />
        </md-avatar>

        <span class="md-list-item-text">{{ user.name }}</span>
        <md-chip class="bg-red-400">{{ user.points }}</md-chip>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  name: "leaderboard",
  props: {
    users: Array,
  },
};
</script>