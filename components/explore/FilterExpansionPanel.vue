<template>
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
                            placeholder="Filtrar por marca (Toyota, Mercedes Benz, BMW, etc)" @keyup="filterByBranding"
                            :loading="isBrandingLoading" v-model="filterBrand" />
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
                        <v-select :items="['1000', '1100', '1200', '1300', '1400', '1500']" :active-picker.sync="'YEAR'"
                            label="Tipo de vehículo">
                        </v-select>
                    </v-col>
                </v-row>
                <div class="d-flex justify-end">
                    <v-btn class="bg-primary-color text-white d-flex">
                        Filtrar <v-icon class="mx-1">mdi-filter</v-icon>
                    </v-btn>
                </div>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>
<script setup lang="ts">
let isBrandingLoading = ref(false);
let filterBrand: string = "";
let minAndMaxPrice = ref([500, 150000]);
function filterByBranding(text: string) {
    isBrandingLoading.value = true;
    // isLoadingCars.value = true;
    // dFn((text: string) => { });
}
</script>