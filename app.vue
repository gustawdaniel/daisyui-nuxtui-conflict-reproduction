<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';

const people = ['Wade Cooper', 'Claudie Smith', 'Emil Schaefer']
const selected = ref(people[0])

const date = ref();
</script>

<template>
  <USelectMenu v-model="selected" :options="people"/>
  <VueDatePicker v-model="date"/>
</template>
