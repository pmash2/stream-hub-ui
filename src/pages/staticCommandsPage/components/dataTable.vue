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
            <md-table-cell>
                <img src="@/assets/icons/save.svg" alt="Save" class="inline-block">
                <img src="@/assets/icons/delete.svg" alt="Delete" class="inline-block">
            </md-table-cell>
        </md-table-row>
        <md-table-row>
            <md-table-cell></md-table-cell>
            <md-table-cell>
                <md-field :class="messageClass">
                    <label>Keyword</label>
                    <md-input v-model="required" required></md-input>
                    <span class="md-error">Need to specify a keyword</span>
                </md-field>
            </md-table-cell>
            <md-table-cell>
                <md-field :class="messageClass">
                    <label>Text</label>
                    <md-input v-model="required" required></md-input>
                    <span class="md-error">Need to specify text to display</span>
                </md-field>
            </md-table-cell>
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