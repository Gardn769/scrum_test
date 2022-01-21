<template>
  <div>
    <v-btn v-on:click="sprints.push({})">Create a sprint</v-btn>
    <v-expansion-panels>
      <v-expansion-panel 
        v-for="(item,i) in sprints"
        :key="i"
      >
        <v-expansion-panel-header>
          <v-row>
            <v-col>
            <span>Sprint {{i}}</span>
            <span> {{Math.floor(Math.random() *10+21)}} Jan. - {{Math.floor(Math.random() *20+6)}} Feb.</span> 
            <span>(tasks {{x}})</span>
            </v-col>
            <v-col>
              <v-btn>Complete a sprint</v-btn>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content 
          v-for="(item,i) in x=Math.floor(Math.random() *10+1)"
          :key="i"
        >
          content
        </v-expansion-panel-content>

      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          Backlog (tasks: {{backlog.length}})
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div
            v-for="(item,i) in backlog"
            :key="i"          
          >
            test {{i}}
          </div>
          <v-text-field
            label="task?"
            type="text"
            v-model="message"
          >
          <template v-slot:prepend>
            <v-select              
              label="Standard"
            ></v-select>
          </template>
          <template v-slot:append-outer>
            <v-btn v-on:click="backlog.push({})">
              Create a task
            </v-btn>
            </template>
          </v-text-field>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data: () => ({
    message: '',
    backlog: [],
    sprints: []
  }),
}
</script>

<style>

</style>