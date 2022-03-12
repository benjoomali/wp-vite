# wp-vite - An opinionated frontend for headless Wordpress with Vue 3, Tailwind and Vite

I wanted to create a simple starter (titled Squall) for the many projects I build that interact with Wordpress.

This is also my first attempt at Vite, a really amazing tool that speeds up workflow. 

This little starter includes TailwindCSS and its ecosystem (headlessUI, heroicons, typography etc..) along with Vue 3 & Vue Router 4 to create a SPA using headless Wordpress. 

### Getting Started

```sh
npm i
npm run dev
```

### Pulling Posts from Wordpress Rest API

Change the $baseURL in main.js to whatever endpoint you want to pull data from. This uses the provide/inject pattern to pass the baseURL value to Posts.vue and Post.vue.

### Progress
 * Generate Post List ✅
 * Dynamic Routes using Slug Param ✅
 * Basic theme to expose endpoints
 * ACF Integration 
 * SSR
 * More Stuff



### Credits
Big thanks to [web2033](https://github.com/web2033/vite-vue3-tailwind-starter) for creating the initial foundation of the starter.