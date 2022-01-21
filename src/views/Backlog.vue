<template>
  <div>
    <v-btn v-on:click="sprints.push({})">Создать спринт</v-btn>
    <v-expansion-panels>
      <v-expansion-panel 
        v-for="(item,i) in sprints"
        :key="i"
      >
        <v-expansion-panel-header>
          <v-row>
            <v-col>
            <span>Спринт {{i}}</span>
            <span> {{Math.floor(Math.random() *10+21)}} янв. - {{Math.floor(Math.random() *20+6)}} февраля.</span> 
            <span>(задач {{x}})</span>
            </v-col>
            <v-col>
              <v-btn>Завершить спринт</v-btn>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content 
          v-for="(item,i) in x=Math.floor(Math.random() *10+1)"
          :key="i"
        >
          контент
        </v-expansion-panel-content>

      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          Беклог (задач: {{backlog.length}})
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div
            v-for="(item,i) in backlog"
            :key="i"          
          >
            test {{i}}
          </div>
          <v-text-field
            label="Что нужно сделать?"
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
              Создать задачу
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