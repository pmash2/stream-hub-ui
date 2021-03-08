<template>
    <table class="table-auto border border-collapse border-green-800">
        <thead>
            <tr class="bg-gray-300">
                <td>Id</td>
                <td>Keyword</td>
                <td>Text</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="command in commands" :key="command.Id">
                <td>{{ command.Id }}</td>
                <td>{{ command.Keyword }}</td>
                <td>{{ command.Text }}</td>
            </tr>
        </tbody>
    </table>
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