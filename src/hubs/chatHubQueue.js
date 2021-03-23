import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
export default {
  install (Vue) {
    const connection = new HubConnectionBuilder()
    .withUrl(`${Vue.prototype.$http.defaults.baseURL}/chatmessage`)
      .configureLogging(LogLevel.Information)
      .build()
    // https://www.dotnetcurry.com/aspnet-core/1480/aspnet-core-vuejs-signalr-app
    // use new Vue instance as an event bus
    const chatHubQueue = new Vue()
    // every component will use this.$chatHubQueue to access the event bus
    Vue.prototype.$chatHubQueue = chatHubQueue
    // Forward server side SignalR events through $chatHubQueue, where components will listen to them
    connection.on('ChatMessageReceived', (user, msg) => {
      chatHubQueue.$emit('message-received', { user, msg })
    })

    let startedPromise = null
    function start () {
      startedPromise = connection.start().catch(err => {
        console.error('Failed to connect with hub', err)
        return new Promise((resolve, reject) =>
          setTimeout(() => start().then(resolve).catch(reject), 5000))
      })
      return startedPromise
    }
    connection.onclose(() => start())

    start()
  }
}