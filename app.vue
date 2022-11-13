<template>
  <v-app>
    <v-navigation-drawer width="120" class="bg-main text-caption">
      <route-links-vue></route-links-vue>
    </v-navigation-drawer>
    <app-bar-vue></app-bar-vue>
    <v-main>
        <NuxtPage></NuxtPage>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AppBarVue from './components/layout/AppBar.vue';
import RouteLinksVue from './components/layout/RouteLinks.vue';
</script>

<style>
.navigation-icon {
  width: 100%;
  aspect-ratio: 1;
  background-color: transparent !important;
}

.main-active-link {
  background-color: aliceblue !important;
}

.bg-main {
  background-color: #37394e !important;
}

.bg-main2 {
  background-color: #E66C02 !important;
}

.hvr-grow {
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
}
.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  transform: scale(1.05);
}
</style>