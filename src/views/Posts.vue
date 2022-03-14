<script setup>
  import { ref, inject } from 'vue'
  import { useFetch } from '@/utilities/useFetch.js'

  const baseURL = inject('$baseURL') + "/posts"
  const { data, error, retry } = useFetch(baseURL)

</script>

<template>
  <div class="relative">
    <div
      class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 flex flex-col lg:py-16 lg:px-8 space-y-4"
    >
      <h2
        class="text-3xl leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-5"
      >Posts - Generates a list of Posts from Wordpress</h2>
      <p
        class="text-sm"
      >Please update baseURL in main.js to fetch a list of posts from your Wordpress website.</p>
      <div v-if="error" class="space-y-4">
        <p>Posts could not be loaded.</p>
        <div>
          <button
            @click="retry"
            class="bg-blue-500 px-3 py-1.5 rounded shadow text-white cursor-pointer"
          >Reload</button>
        </div>
      </div>
      <div v-else-if="data">
        <div v-for="post in data" :key="post" class="text-xl mb-2">
          <router-link
            :to="'/posts/' + post.slug"
            class="text-blue-500 underline"
          >{{ post.title.rendered }} - {{ post.slug }}</router-link>
        </div>
      </div>
      <div v-else>Loading Posts...</div>
    </div>
  </div>
</template>
