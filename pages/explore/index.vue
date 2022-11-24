<template>
    <div class="my-2">
        <v-row class="mx-2 my-2" v-show="!isLoadingCars">
            <v-col v-for="(car, i) in cars" :key="i" cols="12" sm="4" lg="3" xl="2" class="flex-grow-0 flex-shrink-0">
                <car-card-vue @click.prevent="goToDetailsPage(car.id)" class="gradient-border" v-bind="car" @setToFavorite="setCarToFavorite(car.id)" />
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

const router = useRouter();
const getCars: () => Promise<void> = async () => {
    isLoadingCars.value = true;
    new Promise(f => setTimeout(f, 50)).then((value) => {
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
let isLoadingCars = ref(false);
const dFn = debounce(async val => {
    await getCars();
    isLoadingCars.value = false;
}, '1200ms')

function goToDetailsPage(id:number) {
    router.push(`/explore/${id}`);
}
function setCarToFavorite(id: number) {
    let index = cars.value!.findIndex((car) => car.id == id);
    cars.value![index].isFavorite = !cars.value![index].isFavorite;
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