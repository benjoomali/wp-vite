<script setup>
import Logo from '@/components/Logo.vue'
</script>

<template>
  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <router-link to="/" class="inline-flex items-center group">
          <Logo />
          <h1
            class="ml-3 text-blue-500 text-2xl group-hover:text-blue-400 font-serif tracking-tighter font-medium"
          >Squall</h1>
        </router-link>
        <nav class="flex items-center space-x-3">
          <router-link to="/posts" class="text-blue-500 hover:text-blue-400">Posts</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>