<template>
    <v-main>
        <v-row class="border-all mr-12">
            <v-col cols="12" md="6" lg="4">
                <v-carousel :show-arrows="'hover'">
                    <v-carousel-item v-for="(image, i) in images" :key="i" width="100%" :src="image" lazy cover />
                </v-carousel>
            </v-col>
            <v-col cols="12" md="6" lg="8">
                <div class="elevation-1 d-flex flex-column flex-wrap" style="height: fit-content;">
                    <div class="d-flex justify-space-between align-center">
                        <h2 class="mx-3">BMW-m135i 2020</h2>
                        <div class="bg-warning px-8 py-2">
                            <h2>Gs. 122.000.000</h2>
                        </div>
                    </div>
                    <v-divider />
                    <v-row class="py-3">
                        <v-col cols="12" sm="4" v-for="(detail, i) in details" :key="i">
                            <div class="d-flex justify-space-between px-3">
                                <div class="d-flex">
                                    <v-icon size="small">{{ detail.icon }}</v-icon>
                                    <div class="text-caption pl-1">
                                        {{ detail.title }}
                                    </div>
                                </div>
                                <h4>{{ detail.text }}</h4>
                            </div>
                            <v-divider class="mt-1" />
                        </v-col>
                    </v-row>
                    <v-spacer />
                </div>
            </v-col>
        </v-row>
    </v-main>
</template>
<script setup lang="ts">
let images = [
    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
];
let details = [
    {
        icon: "mdi-magnify",
        title: "Motor",
        text: "1800"
    },
    {
        icon: "mdi-magnify",
        title: "Combustible",
        text: "Nafta"
    },
    {
        icon: "mdi-magnify",
        title: "Kilometraje",
        text: "155.000"
    },
    {
        icon: "mdi-magnify",
        title: "Caja",
        text: "Automatico"
    },
    {
        icon: "mdi-magnify",
        title: "Documentacion",
        text: "Titular"
    },
    {
        icon: "mdi-magnify",
        title: "Traccion",
        text: "Delantera"
    },
    {
        icon: "mdi-magnify",
        title: "Del representante",
        text: "Si"
    },
    {
        icon: "mdi-magnify",
        title: "Color",
        text: "Negro"
    },
    {
        icon: "mdi-magnify",
        title: "Estado",
        text: "Usado"
    },
]
</script>
<style>

</style>