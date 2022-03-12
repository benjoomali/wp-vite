import Home from './views/Home.vue'
import Posts from './views/Posts.vue'
import Post from './views/Post.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/posts',
    meta: { title: 'Posts' },
    component: Posts,
    // example of route level code-splitting
    // this generates a separate chunk (Posts.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/Posts.vue')
  },
  {
    path: '/posts/:slug', component: Post
  },
  { path: '/:path(.*)', component: NotFound },
]
