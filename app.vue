<template>
  <v-app >
    <v-navigation-drawer width="120" class="bg-primary-color text-caption">
      <route-links-vue></route-links-vue>
    </v-navigation-drawer>
    <app-bar-vue></app-bar-vue>
    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AppBarVue from './components/layout/AppBar.vue';
import RouteLinksVue from './components/layout/RouteLinks.vue';
</script>
<style>
@import '~/assets/styles/main.css';
</style>