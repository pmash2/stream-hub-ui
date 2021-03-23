<template>
  <div>
    <md-list v-for="msg in messages" :key="msg.message">
      <chat-message :message="msg"></chat-message>
    </md-list>
  </div>
</template>

<script>
import chatMessage from "./chatMessage";

export default {
  components: { chatMessage },
  name: "chat-hub",
  props: {
    messages: Array,
  },
  created() {
    // Listen to score changes coming from SignalR events
    this.$chatHubQueue.$on("message-received", this.ChatMessageReceived);
  },
  methods: {
    // This is called from the server through SignalR
    ChatMessageReceived({ user, msg }) {
      this.messages.push({
        user: user,
        message: msg,
      });
    },
  },
};
</script>