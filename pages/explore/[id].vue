<template>
    <div class="pa-md-12">
        <v-row class="border-all">
            <v-col cols="12" md="6" lg="5">
                <v-carousel v-model="carousel" :show-arrows="'hover'" hide-delimiters style="height: max-content !important;">
                    <v-carousel-item v-for="(image, i) in images" :key="i" width="100%" :src="image" lazy>
                        <div class="d-flex justify-space-between bg-primary-color" style="opacity: 80%;">
                            <div class="text-white pl-2 text-button">
                                Lambare - Central
                            </div>
                            <div>
                                <v-btn size="small" icon color="transparent" @click="likeCar()">
                                    <v-icon :color="isCarLiked == true ? 'red' : 'white'">
                                        mdi-heart
                                    </v-icon>
                                </v-btn>
                                <v-btn icon size="small" color="transparent">
                                    <v-icon color="white">
                                        mdi-share
                                    </v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </v-carousel-item>
                </v-carousel>
                <div class="d-flex bg-primary-color justify-center" style="overflow-x: auto;">
                    <div class="filter-secondary mx-2" style="width: 80px; height: 60px; cursor: pointer;" v-for="(image, i) in images" :key="i">
                        <v-img height="100%" width="100%" cover :src="image" @click="setImage(i)"/>
                    </div>
                </div>
                <div class="d-flex justify-space-between bg-primary-color">
                    <div style="width: 50%;">
                        <v-btn plain color="secondary-color text-white" width="100%">
                            Ofertar
                        </v-btn>
                    </div>
                    <div style="width: 50%;">
                        <v-btn plain width="100%" color="green" class="text-white">
                            Comprar
                        </v-btn>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="6" lg="7">
                <div class="elevation-1 d-flex flex-column flex-wrap" style="height: fit-content;">
                    <div class="d-flex bg-primary-color text-white justify-space-between align-center">
                        <div class="text-button">
                            <h2 class="mx-3">BMW-m135i 2020</h2>
                        </div>
                        <div class="bg-green text-white px-8 py-2 text-button">
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
                        </v-col>
                    </v-row>
                    <v-divider color="primary-color pt-1" />
                    <div class="d-flex px-3 py-2 align-center text-button">
                        <v-icon class="mr-3" color="primary-color">
                            mdi-car
                        </v-icon>
                        <h3>Exterior</h3>
                    </div>
                    <div class="d-flex flex-wrap px-3 pb-2 text-overline">
                        <div class="d-flex" v-for="(item, i) in exterior" :key="i">
                            <div class="mr-2">
                                <v-icon color="green">
                                    mdi-check
                                </v-icon>
                                {{ item }}
                            </div>
                        </div>
                    </div>
                    <v-divider color="primary-color pt-1" />
                    <div class="d-flex px-3 py-2 align-center text-button">
                        <v-icon class="mr-3" color="primary-color">
                            mdi-home
                        </v-icon>
                        <h3>Interior</h3>
                    </div>
                    <div class="d-flex flex-wrap px-3 pb-2 text-overline">
                        <div class="d-flex" v-for="(item, i) in interior" :key="i">
                            <div class="mr-2">
                                <v-icon color="green">
                                    mdi-check
                                </v-icon>
                                {{ item }}
                            </div>
                        </div>
                    </div>
                    <v-divider color="primary-color pt-1" />
                    <div class="d-flex px-3 py-2 align-center text-button">
                        <v-icon class="mr-3" color="primary-color">
                            mdi-security
                        </v-icon>
                        <h3>Seguridad</h3>
                    </div>
                    <div class="d-flex flex-wrap px-3 pb-2 text-overline">
                        <div class="d-flex align-center" v-for="(item, i) in seguridad" :key="i">
                            <div class="mr-2">
                                <v-icon color="green">
                                    mdi-check
                                </v-icon>
                                {{ item }}
                            </div>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>
<script setup lang="ts">
let isCarLiked = ref(true);
let carousel = ref(0);
let images = [
    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
];
function likeCar() {
    isCarLiked.value = !isCarLiked.value;
}
function setImage(index: number) {
    carousel.value = index;
}
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
];
let exterior = ['Llantas deportivas', 'Polarizado', 'Busca Huellas'];
let interior = ['Radio con Pantalla', 'Comandos al volante', 'Tapizado de cuero',
    'Tapizado de tela', 'Espejos retrovisores externos electricos',
    'Levanta vidrio delanteros/traseros electricos', 'Aire acondicionado', 'Bloqueo de puertas electrico'
]
let seguridad = ["Alarma", "Airbags", "Frenos ABS", "Camara de retroceso"];
</script>
<style>

</style>