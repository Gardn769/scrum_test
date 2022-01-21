<template>
  <v-card>
    <v-card-title>
      Repositories
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'summary',
          },
          { text: 'Description', sortable: false, value: 'description' },
          { text: 'Last updated', value: 'updated' },
        ],
        desserts: [
          {
            summary: 'Задача о философах',
            description: 'философия...',
            updated: '17.03.2002',
          },
          {
            summary: 'Качественный продукт',
            description: 'Некачественный продукт',
            updated: '18.03.2021',
          },
          {
            summary: 'rofl',
            description: 'rofl',
            updated: '21.01.2022',
          },
          {
            summary: 'Бот',
            description: 'бот контролирующий активность пользователя',
            updated: '20.01.2022',
          },
          {
            summary: 'rofl2',
            description: 'rofl2',
            updated: '21.01.2022',
          },
          {
            summary: 'rofl3',
            description: 'rofl3',
            updated: '21.01.2022',
          },
        ],
      }
    },
  }
</script>
