<template>
    <div class="grid grid-flow-col grid-rows-3 grid-cols-1">
        <div class="row-span-1 col-span-1">
            <h1>This is the StaticCommands page</h1>
        </div>
        <div class="row-span-1 place-self-center">
            <data-table :commands="commands"/>
        </div>
        <div class="row-span-1"></div>
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