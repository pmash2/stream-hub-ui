<template>
    <div id="allContent" class="fullScreen grid grid-rows-6 grid-cols-12 grid-flow-col h-full">
        <div id="screenArea" class="row-span-5 col-span-9 relative">
            <div id="screenSource" class="bg-white z-10 streamPanel opacity-0 h-full"></div>
            <div id="startMenuOverlay" class="lowerOverlay grid grid-flow-col z-20 absolute inset-x-0 bottom-0">
                <div class="grid grid-flow-col grid-cols-2 inline-block font-mono text-red-600 text-3xl font-bold align-text-bottom text-center">
                    <div class="inline-block col-span-1">
                        !today
                    </div>
                    <div class="inline-block col-span-1">
                        Today's TODOs
                    </div>
                </div>
            </div>
        </div>
        <div id="lowerPanelContent" class="row-span-1 col-span-9 bg-gray-900 text-white grid grid-cols-2">
            <div id="todayMessage" class="col-span-1 text-red-900">Placeholder text</div>
            <div id="todos" class="col-span-1">
                @*<iframe id="todoFrame" class="h-full w-full" src="../assets/TODO.html"></iframe>*@
            </div>
        </div>
        <div id="spacer" class="row-span-4 col-span-1"></div>
        <div id="camera" class="row-span-2 col-span-3 bottom-0 right-0 z-30 ">
            <div class="cameraBorder absolute bg-black bottom-0 right-0 rounded-lg z-30"></div>
        </div>
        <div id="chatArea" class="row-span-4 col-span-2 relative bg-white">
            <!--
            <div id="chat-messages">
                <ol>
                    <li v-for="msg in messages">
                        {{ msg.author }} says {{ msg.message }} from Vue!
                    </li>
                </ol>
            </div>
                -->
            <img src="@/assets/pmashBanner.png" class="pmashBanner absolute inset-x-0 bottom-0 pb-2" width="324px" height="76px" />
        </div>
    </div>
</template>

<script>
export default {
  name: 'overlay',
  emits: ['toggle-drawer'],
  mounted(el) {
      this.$emit("toggle-drawer");
  },
}
</script>

<style lang="scss" scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

h2 {
  font-size: 48px;
  vertical-align: center;
}

.cameraBorder {
  height: 365px;
  width: 510px;
}

.streamPanel {
  height: 890px;
  width: 1583px;
}

.fullScreen {
  height: 1080px;
}
</style>