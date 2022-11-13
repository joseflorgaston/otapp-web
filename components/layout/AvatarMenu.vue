<template>
    <v-menu min-width="200px" rounded>
        <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
                <v-avatar color="brown" size="large">
                    <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
                </v-avatar>
            </v-btn>
        </template>
        <v-card>
            <v-card-text>
                <div class="mx-auto text-center">
                    <v-avatar color="brown">
                        <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
                    </v-avatar>
                    <h3>{{ user.fullName }}</h3>
                    <p class="text-caption mt-1">
                        {{ user.email }}
                    </p>
                    <v-divider class="my-3"></v-divider>
                    <v-btn rounded variant="text">
                        Edit Account
                    </v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn rounded variant="text">
                        Disconnect
                    </v-btn>
                </div>
            </v-card-text>
        </v-card>
    </v-menu>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const user = ref({
    initials: 'JD',
    fullName: "John Titor",
    email: "john.titor@titor.com"
});

</script>