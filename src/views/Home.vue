<template>
  <div class="relative">
    <div
      class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 flex flex-col lg:py-16 lg:px-8 space-y-4"
    >
      <h2
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        <HelloWorld />
      </h2>
      <h2 class="text-lg">
        Headless UI Toggle
        <Toggle />
      </h2>
    </div>
  </div>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import Toggle from '@/components/Toggle.vue'
</script>