<template>
    <Suspense>
        <div class="d-flex flex-column justify-space-between" style="height: 100%;">
            <v-list>
                <v-list-item v-for="(route, i) in routes" :key="i" :to="route.to" class="filter-white"
                    active-class="filter-secondary" router>
                    <v-list-item-action class="navigation-icon d-flex flex-column py-2">
                        <img :src="route.icon" width="40" aspect-ratio="1">
                        <h5 class="py-1">{{ route.title }}</h5>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
            <div class="pa-3 d-flex justify-center" title="Cerrar Sesion">
                <v-btn icon>
                    <img :src="logoutIcon" width="30" aspect-ratio="1">
                </v-btn>
            </div>
        </div>
    </Suspense>
</template>
<script setup lang="ts">
const routes = [
    {
        to: "/explore",
        title: "Explorar",
        icon: getImageUrl('search.svg')
    },
    {
        to: "/publish",
        title: "Publicar",
        icon: getImageUrl('upload.svg')
    },
    {
        to: "/favorites",
        title: "Favoritos",
        icon: getImageUrl('star.svg')
    },
    {
        to: "/mycars",
        title: "Mis coches",
        icon: getImageUrl('car.svg')
    },
    {
        to: "/howtouse",
        title: "Tutorial",
        icon: getImageUrl('tutorial.svg')
    }
]
const logoutIcon = getImageUrl('logout.svg');

function getImageUrl(name: string) {
    return new URL(`/assets/icons/${name}`, import.meta.url).href
}
</script>

<style>
.filter-white {
    filter: invert(99%) sepia(0%) saturate(2453%) hue-rotate(181deg) brightness(126%) contrast(89%);
}

.filter-secondary {
    filter: invert(50%) sepia(43%) saturate(406%) hue-rotate(9deg) brightness(100%) contrast(90%);
}
</style>