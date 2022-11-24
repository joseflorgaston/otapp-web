<template>
    <div class="text-center">
        <v-btn color="deep-purple-accent-4" @click="overlay = !overlay">
            Launch Application
            <v-icon end>
                mdi-open-in-new
            </v-icon>
        </v-btn>

        <v-overlay :model-value="overlay" class="align-center justify-center">
            <v-progress-circular indeterminate size="64" color="primary"></v-progress-circular>
        </v-overlay>
    </div>
</template>
<script setup lang="ts">
let overlay = ref(true);
</script>