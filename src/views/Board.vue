<template>
  <div>
    <v-row>
      
      <v-col v-for="(item, i) in count" :key="i" cols="2">
        <v-card
            max-width="450"
            class="mx-auto"
            
          >
            <v-toolbar
              color="indigo"
              dark
            >
              <v-toolbar-title>Task</v-toolbar-title>
            </v-toolbar>

            <v-list three-line>
              <template v-for="(item, index) in items">
                <v-divider
                  :key="index"
                  v-if="index"
                ></v-divider>

                <v-list-item
                  :key="item.title"
                >
                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
      </v-col>
      <v-col>
        <v-btn
          elevation="5"
          icon
          x-large
          v-on:click="count.push({})"
        ><v-icon>mdi-plus</v-icon></v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          title: 'Task',
          subtitle: 'lorem upsum',
        },
        {
          title: 'Testing',
          subtitle: 'Test a very hard problem',
        },
        {
          title: 'Feature',
          subtitle: 'To keep the client happy',
        },
        {
          title: 'Bug',
          subtitle: 'Fix!!!',
        },
      ],
      count: [],
    }),
    methods:{
    // shuffle(array) { return array.sort(() => Math.floor(Math.random() - 0.5))}
  }
  }
</script>