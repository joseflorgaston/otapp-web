<template>
    <div class="my-2">
        <v-expansion-panels class="ml-5 pr-sm-5 pr-md-12">
            <v-expansion-panel class="text-caption">
                <v-expansion-panel-title>
                    <div class="text-h5">
                        Filtrar coches
                    </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-row>
                        <v-col cols="12" sm="4" lg="6">
                            <h3>Marca del vehículo</h3>
                            <v-text-field appendInnerIcon="mdi-magnify" label="Filtrar por marca"
                                placeholder="Filtrar por marca (Toyota, Mercedes Benz, BMW, etc)"
                                @keyup="filterByBranding" :loading="isBrandingLoading" v-model="filterBrand" />
                        </v-col>
                        <v-col cols="12" sm="6">
                            <div class="d-flex justify-space-between">
                                <h3>Precio Mínimo</h3>
                                <h3>Precio Maximo</h3>
                            </div>
                            <v-range-slider v-model="minAndMaxPrice" :max="150000" :min="500" :step="100" hide-details
                                class="align-center">
                                <template v-slot:prepend>
                                    <v-text-field :model-value="minAndMaxPrice[0]" hide-details single-line type="number"
                                        variant="outlined" class="prepend-textfield" density="compact" suffix="USD"
                                        @change="$set(minAndMaxPrice, 0, $event)" min="500" :max="minAndMaxPrice[1]" />
                                </template>
                                <template v-slot:append>
                                    <v-text-field :model-value="minAndMaxPrice[1]" hide-details single-line type="number"
                                        variant="outlined" class="prepend-textfield" density="compact" suffix="USD"
                                        @change="$set(minAndMaxPrice, 1, $event)" :min="minAndMaxPrice[0]" max="150000" />
                                </template>
                            </v-range-slider>
                        </v-col>
                        <v-col cols="12" sm="3">
                            <h3>Año</h3>
                            <v-text-field type="date" :active-picker.sync="'YEAR'" label="Año">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="3">
                            <h3>Tipo de Vehículo</h3>
                            <v-select :items="['Autos', 'SUV', 'Pickup', 'VAN', 'Deportivo', 'Motos']"
                                :active-picker.sync="'YEAR'" label="Tipo de vehículo">
                            </v-select>
                        </v-col>
                        <v-col cols="12" sm="3">
                            <h3>Color</h3>
                            <v-select :items="['Rojo', 'Azul', 'Gris', 'Blanco', 'Negro', 'Verde']"
                                :active-picker.sync="'YEAR'" label="Tipo de vehículo">
                            </v-select>
                        </v-col>
                        <v-col cols="12" sm="3">
                            <h3>Motor</h3>
                            <v-select :items="['1000', '1100', '1200', '1300', '1400', '1500']"
                                :active-picker.sync="'YEAR'" label="Tipo de vehículo">
                            </v-select>
                        </v-col>
                    </v-row>
                    <div class="d-flex justify-end">
                        <v-btn class="bg-main text-white d-flex">
                            Filtrar <v-icon class="mx-1">mdi-filter</v-icon>
                        </v-btn>
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
        <v-row class="mx-2 my-2" v-show="!isLoadingCars">
            <v-col v-for="(car, i) in cars" :key="i" cols="12" sm="4" lg="3" xl="2" class="flex-grow-0 flex-shrink-0">
                <car-card-vue class="gradient-border" v-bind="car" @setToFavorite="setCarToFavorite(car.id)" />
            </v-col>
        </v-row>
        <div v-show="isLoadingCars">
            <div class="d-flex justify-center align-center" style="height: 400px;">
                <v-progress-circular indeterminate color="bg-main" :size="150">
                    <h4>Cargando ...</h4>
                </v-progress-circular>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CarCardVue from '~~/components/shared/CarCard.vue';
import { Ref, ref, Suspense } from 'vue';
import { debounce } from 'vue-debounce'

const getCars: () => Promise<void> = async () => {
    isLoadingCars.value = true;
    new Promise(f => setTimeout(f, 5000)).then((value) => {
        isLoadingCars.value = false;
        cars.value = [
            {
                id: 1,
                images: [
                    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
                    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
                    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
                ],
                name: "BMW-m135i",
                price: 34500,
                currency: "USD",
                author: "John Titor",
                isFavorite: true
            },
            {
                id: 2,
                images: [
                    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
                    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
                    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
                ],
                name: "BMW-m135i",
                price: 34500,
                currency: "USD",
                author: "John Titor",
                isFavorite: true
            },
            {
                id: 3,
                images: [
                    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
                    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
                    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
                ],
                name: "BMW-m135i",
                price: 34500,
                currency: "USD",
                author: "John Titor",
                isFavorite: true
            },
            {
                id: 4,
                images: [
                    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
                    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
                    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
                ],
                name: "BMW-m135i",
                price: 34500,
                currency: "USD",
                author: "John Titor",
                isFavorite: true
            },
            {
                id: 5,
                images: [
                    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
                    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
                    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
                ],
                name: "BMW-m135i",
                price: 34500,
                currency: "USD",
                author: "John Titor",
                isFavorite: true
            },
            {
                id: 6,
                images: [
                    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
                    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
                    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
                ],
                name: "BMW-m135i",
                price: 34500,
                currency: "USD",
                author: "John Titor",
                isFavorite: true
            },
            {
                id: 7,
                images: [
                    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
                    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
                    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
                ],
                name: "BMW-m135i",
                price: 34500,
                currency: "USD",
                author: "John Titor",
                isFavorite: true
            },
            {
                id: 8,
                images: [
                    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
                    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
                    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
                ],
                name: "BMW-m135i",
                price: 34500,
                currency: "USD",
                author: "John Titor",
                isFavorite: true
            },
            {
                id: 9,
                images: [
                    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
                    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
                    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
                ],
                name: "BMW-m135i",
                price: 34500,
                currency: "USD",
                author: "John Titor",
                isFavorite: true
            },
            {
                id: 10,
                images: [
                    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
                    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
                    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
                ],
                name: "BMW-m135i",
                price: 34500,
                currency: "USD",
                author: "John Titor",
                isFavorite: true
            },
            {
                id: 11,
                images: [
                    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
                    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
                    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
                ],
                name: "BMW-m135i",
                price: 34500,
                currency: "USD",
                author: "John Titor",
                isFavorite: true
            },
            {
                id: 12,
                images: [
                    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
                    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
                    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
                ],
                name: "BMW-m135i",
                price: 34500,
                currency: "USD",
                author: "John Titor",
                isFavorite: true
            },
            {
                id: 13,
                images: [
                    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
                    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
                    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
                ],
                name: "BMW-m135i",
                price: 34500,
                currency: "USD",
                author: "John Titor",
                isFavorite: true
            },
            {
                id: 14,
                images: [
                    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
                    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
                    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
                ],
                name: "BMW-m135i",
                price: 34500,
                currency: "USD",
                author: "John Titor",
                isFavorite: true
            },
            {
                id: 15,
                images: [
                    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
                    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
                    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
                ],
                name: "BMW-m135i",
                price: 34500,
                currency: "USD",
                author: "John Titor",
                isFavorite: true
            },
            {
                id: 16,
                images: [
                    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
                    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
                    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
                ],
                name: "BMW-m135i",
                price: 34500,
                currency: "USD",
                author: "John Titor",
                isFavorite: true
            },
            {
                id: 17,
                images: [
                    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
                    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
                    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
                ],
                name: "BMW-m135i",
                price: 34500,
                currency: "USD",
                author: "John Titor",
                isFavorite: true
            },
            {
                id: 18,
                images: [
                    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
                    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
                    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
                ],
                name: "BMW-m135i",
                price: 34500,
                currency: "USD",
                author: "John Titor",
                isFavorite: true
            },
            {
                id: 19,
                images: [
                    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
                    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
                    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
                ],
                name: "BMW-m135i",
                price: 34500,
                currency: "USD",
                author: "John Titor",
                isFavorite: true
            },
            {
                id: 20,
                images: [
                    "https://cdn.motor1.com/images/mgl/40eM2k/s3/manhart-mh1-350-front-view.jpg",
                    "https://www.autoblog.nl/files/2020/11/dahler-bmw-m135i-xdrive-2020-970-015.jpg",
                    "https://carnovo.com/wp-content/uploads/2021/10/bmw-m135i-xdrive-interior.jpg"
                ],
                name: "BMW-m135i",
                price: 34500,
                currency: "USD",
                author: "John Titor",
                isFavorite: true
            },
        ]
    });
}
const cars: Ref<CarCard[] | null> = ref([]);
let minAndMaxPrice = ref([500, 150000]);
let isLoadingCars = ref(false);
let isBrandingLoading = ref(false);
let filterBrand:string = "";
const dFn = debounce(async val => {
    isBrandingLoading.value = false;
    await getCars();
    isLoadingCars.value = false;
}, '1200ms')

function setCarToFavorite(id: number) {
    let index = cars.value!.findIndex((car) => car.id == id);
    cars.value![index].isFavorite = !cars.value![index].isFavorite;
}
function filterByBranding(text: string) {
    isBrandingLoading.value = true;
    isLoadingCars.value = true;
    dFn((text: string) => { });
}
await getCars();
</script>
<style>
.prepend-textfield {
    min-width: 150px; 
    width: 8rem; 
    max-width: 20%;
}
</style>