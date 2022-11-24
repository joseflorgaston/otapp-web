<template>
    <v-card class="hvr-grow car-card text-caption border-all">
        <div class="px-2">{{ author }}</div>
        <v-carousel style="height: 100%;" hide-delimiters :show-arrows="'hover'">
            <v-carousel-item v-for="(image, i) in images" :key="i" :src="image" height="200" lazy cover />
        </v-carousel>
        <div class="border-all px-2 py-2">
            <h2>{{name}}</h2>
        </div>
        <v-card-actions class="border-all">
            <h3 class="px-2">{{ formatter.format(price) }} {{ currency }}</h3>
            <v-spacer></v-spacer>
            <v-divider vertical></v-divider>
            <v-btn size="small" color="surface-variant" icon variant="text" class="mx-1">
                <v-icon @click="$emit('setToFavorite')" :color="getHeartColor(isFavorite)">mdi-heart</v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">

interface CarCard {
    id: number,
    images: string[],
    name: string,
    price: number,
    currency: string,
    author: string,
    isFavorite: boolean
}
defineProps<CarCard>();

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function getHeartColor(isFavorite: boolean):string|undefined {
    if(isFavorite) return "red";
}
</script>
<style>
.car-card:hover {
    cursor: pointer;
    filter: drop-shadow(0 0 2em #9C8B4F);
}

.car-card {
    will-change: filter;
}
.border-all {
    border: solid;
    border-width: 1px;
    border-color: gainsboro;
}
</style>