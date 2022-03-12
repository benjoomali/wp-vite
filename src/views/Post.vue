<script setup>
  import { ref, inject } from 'vue'
  import { useRoute } from 'vue-router'
  import { useFetch } from '@/utilities/useFetch.js'

  // Get the slug param from URL in Vue Router
  const slugOptions = useRoute().params.slug
  const baseURL = inject('$baseURL') + "/posts?slug=" + slugOptions
  const { data, error, retry } = useFetch(baseURL)

</script>

<template>
  <div class="relative">
    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 flex flex-col lg:py-16 lg:px-8">
      <div v-if="error">
        <p>Post {{ $route.params.slug }} could not be loaded.</p>
        <button @click="retry">Reload</button>
      </div>
      <div v-else-if="data">
        <div v-for="post in data" :key="post">
          <div v-html="post.content.rendered" class="prose lg:prose-xl mx-auto px-4"></div>
        </div>
      </div>
      <div v-else>Loading Post...</div>
    </div>
  </div>
</template>
