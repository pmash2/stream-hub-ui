<template>
  <div>
    <md-list v-for="msg in messages" :key="msg.message">
      <chat-message :message="msg.message"></chat-message>
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
};
</script>