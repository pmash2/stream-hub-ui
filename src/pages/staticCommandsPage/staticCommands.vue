<template>
    <div>
        <h1>This is the StaticCommands page</h1>
        <data-table :commands="commands" />
    </div>
</template>

<script>
import dataTable from './components/dataTable.vue'

export default {
  components: { dataTable },
    name: 'static-commands',
    components: {
        dataTable,
    },
    data: function () {
        return {
            commands: [
                {
                    Id: 1,
                    Keyword: 'test',
                    Text: 'Here is the test text',
                },
                {
                    Id: 2,
                    Keyword: 'test2',
                    Text: 'Here is the second test text',
                },
            ]
        }
    }
}
</script>

<style>

</style>