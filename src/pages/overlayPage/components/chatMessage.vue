<template>
  <md-list-item>
    <md-avatar>
      <img src="@/assets/logo.png" />
    </md-avatar>

    <div class="md-list-item-text">
      <span>{{ message.user }}</span>
      <span>{{ message.message }}</span>
    </div>
  </md-list-item>
</template>

<script>
export default {
  name: "chat-message",
  props: {
    message: Array,
  },
};
</script>
