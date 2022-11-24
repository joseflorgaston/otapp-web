<template>
    <v-snackbar v-model="snackbar">
        {{ text }}
        <template v-slot:actions>
            <v-btn color="pink" variant="text" @click="snackbar = false">
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>
<script setup lang="ts">
const text = 'Texto del snackbar';
const snackbar = ref(true);
</script>