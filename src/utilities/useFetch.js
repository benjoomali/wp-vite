import { ref, isRef, unref, watchEffect } from 'vue'

export function useFetch(url) {
    const data = ref(null)
    const error = ref(null)

    async function doFetch() {
        // reset state before fetching
        data.value = null
        error.value = null

        // resolve the url value synchronously so it's tracked as a dependency by watchEffect()
        const urlValue = unref(url)

        try {
            const res = await fetch(urlValue)
            data.value = await res.json()
        } catch (e) {
            error.value = e
        }

    }

    if (isRef(url)) {
        // setup reactive re-fetch if input URL is a ref
        watchEffect(doFetch)
    } else {
        doFetch()
    }

    return { data, error, retry: doFetch }
}