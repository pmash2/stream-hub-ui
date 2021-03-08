<template>
    <md-table>
        <md-table-row>
            <md-table-head>Id</md-table-head>
            <md-table-head>Keyword</md-table-head>
            <md-table-head>Text</md-table-head>
            <md-table-head>Edit</md-table-head>
        </md-table-row>
        <md-table-row v-for="command in commands" :key="command.Id">
            <md-table-cell>{{ command.Id }}</md-table-cell>
            <md-table-cell>{{ command.Keyword }}</md-table-cell>
            <md-table-cell>{{ command.Text }}</md-table-cell>
            <md-table-cell>xxxx</md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell><input type="text"></md-table-cell>
            <md-table-cell><input type="text"></md-table-cell>
            <md-table-cell><input type="text"></md-table-cell>
            <md-table-cell>
                <img src="@/assets/icons/save.svg" alt="Save">
            </md-table-cell>
        </md-table-row>
    </md-table>
</template>

<script>
export default {
    name: 'data-table',
    props: {
        commands: Array,
    }
}
</script>

<style>

</style>