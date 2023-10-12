<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import {ref} from 'vue';

  const newTask = ref();
  const tasks = ref([] as {id?: number, text: string, completed: boolean }[]);

  const tabList = ['Current','Completed','All'];
  const tabState = ref('Current');

  function addTask(){
    tasks.value.push({ text: newTask.value, completed: false});
    newTask.value = '';
  }

  function shouldDisplay(task: { id?: number, text: string, completed: boolean}){
    return(tabState.value == 'Current' && !task.completed) ||
      (tabState.value == 'Competed' && task.completed) ||
      tabState.value == 'All';
  }
</script>

<template>
  <main class = "columns is-multiline is centered">
    <div class = "column is-full">
      <TheWelcome />
      <h1></h1>
    </div>
    <div class = "column is-half">
      <p>
        <a class = "is-active">All</a>
        <a>Public</a>
        <a>Private</a>
        <a>Source</a>
        <a>Forks</a>
      </p>
      <p class = "panel-tabs">
        <a v-for="tab in tabList" :class = "{ 'is-active': tabState == tab}" @click.prevent="">{{ tab }}</a>
      </p>
      <label class = "panel-block" v-for="task in tasks" v-show="shouldDisplay(task)">
        <input type="checkbox" v-model="task.completed">
        {{ task.text }}
      </label>
    </div>
  </main>
</template>
