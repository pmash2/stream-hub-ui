<template>
  <md-card class="md-primary">
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{ mainText }}</div>
        <div class="md-subhead">{{ subText }}</div>
      </md-card-header-text>

      <md-card-media>
        <img src="@/assets/logo.png" />
      </md-card-media>
    </md-card-header>
  </md-card>
</template>

<script>
export default {
  name: "game-status",
  props: {
    mainText: String,
    subText: String,
  },
};
</script>