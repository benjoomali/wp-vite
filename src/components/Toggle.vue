<template>
  <Switch
    v-model="enabled"
    :class="enabled ? 'bg-teal-900' : 'bg-teal-700'"
    class="relative inline-flex items-center h-6 rounded-full w-11"
  >
    <span
      :class="enabled ? 'translate-x-6' : 'translate-x-1'"
      class="inline-block w-4 h-4 transform bg-white rounded-full transition ease-in-out duration-150"
    ></span>
  </Switch>
</template>

<script>
    import { ref } from 'vue'
    import { Switch } from '@headlessui/vue'

    export default {
        components: { Switch },
        setup() {
            const enabled = ref(false)

            return { enabled }
        }
    }
</script>