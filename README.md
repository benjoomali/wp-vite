# wp-vite - An opinionated frontend for headless Wordpress with Vue 3, Tailwind and Vite

I wanted to create a simple starter (titled Squall) for the many projects I build that interact with Wordpress.

This is also my first attempt at Vite, a really amazing tool that speeds up workflow. 

This little starter includes TailwindCSS and its ecosystem (headlessUI, heroicons, typography etc..) along with Vue 3 & Vue Router 4 to create a SPA using headless Wordpress. 

### Requirements
 * Wordpress
 * Advanced Custom Fields (not technically required, but very helpful for extending WP)
 * NPM
 * VueJS, Vite

### Getting Started

```sh
npm i
npm run dev
```

### Import the Blank Theme

Copy the blank /squall-wp-vite/ theme into your Wordpress themes folder. Be sure to activate the theme in order to start getting data from Wordpress.

The index.php is a blank file, but will redirect to any URL (ideally your static site).

Alternatively, you can use any theme you want, but you'll have to do some

### Pulling Posts from Wordpress Rest API

Change the $baseURL in main.js to whatever endpoint you want to pull data from. This uses the provide/inject pattern to pass the baseURL value to Posts.vue and Post.vue.

### Exposing ACF Rest API

Install the Advanced Custom Fields plugin and import the acf-import-test-fields.json file. This will create custom fields for Posts, which will be exposed in the API.

ACF 5.11 has a setting toggle within each field group that allows you to "Show in REST API." Once toggled, you can pull the "acf" field and it's attributes.

Note: Passing in the acf_format=standard attribute changes the format from "light" to "standard." This is beneficial if you want the correct output from an image attribute for example.

### Progress
 * Generate Post List ✅
 * Dynamic Routes using Slug Param ✅
 * Basic theme to expose endpoints ✅
 * ACF Integration ✅
 * SSR
 * More Stuff



### Credits
Big thanks to [web2033](https://github.com/web2033/vite-vue3-tailwind-starter) for creating the initial foundation of the starter.