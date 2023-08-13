# VueDatePicker and USelectMenu conflict

To reproduce

```bash
nvm use 20
pnpm i
pnpm dev
```

Open `localhost:3000` in firefox: It should work.
Then open in chromium: You should see long loading and message

```
Page Unresponsive
You can wait for it to become responsive of exit the page.
```

Installed packages

```json
  "dependencies": {
"@vuepic/vue-datepicker": "^5.4.0"
},
"devDependencies": {
"@types/node": "^18.17.3",
"@nuxt/devtools": "latest",
"@nuxthq/ui": "^2.7.0",
"@nuxtjs/tailwindcss": "^6.8.0",
"nuxt": "^3.6.5"
}
```

where there are default packages from `nuxi init`

```json
    "@types/node": "^18.17.3",
"@nuxt/devtools": "latest",
"nuxt": "^3.6.5"
```

there `@nuxthq/ui` and his dependency `@nuxtjs/tailwindcss` are described here

https://github.com/nuxtlabs/ui
https://tailwindcss.nuxtjs.org/

and `@vuepic/vue-datepicker` has homepage

https://vue3datepicker.com/

there is nuxt config

```ts
export default defineNuxtConfig({
    css: ['@vuepic/vue-datepicker/dist/main.css'],
    devtools: {enabled: true},
    modules: ['@nuxthq/ui'],
    build: {
        transpile: ['@vuepic/vue-datepicker']
    }
})
```

and app.vue component

```vue

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
```

If I remove one of these components, the page works, but these two present at the same time on page crashing it.

I observed also that if in project there are more pages, then if you visit page without these components and
use `router-ling` to go on this page it works, so a problem is only when you opening page with these components on it.

Also, if you remove these components and add them when your page is open, these works correctly thanks to HMR.
