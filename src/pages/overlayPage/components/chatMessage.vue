<template>
  <md-list-item>
    <md-avatar>
      <img src="@/assets/logo.png" />
    </md-avatar>

    <span class="md-list-item-text">{{ message }}</span>
  </md-list-item>
</template>

<script>
export default {
  name: "chat-message",
  props: {
    message: String,
  },
};
</script>