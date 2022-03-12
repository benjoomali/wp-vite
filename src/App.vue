<script setup>
import { ref } from 'vue'
import Navigation from '@/components/Navigation.vue'
</script>

<template>
  <Navigation />
  <main>
    <router-view />
  </main>
</template>
