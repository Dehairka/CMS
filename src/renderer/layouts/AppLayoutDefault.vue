<template>
  <div>
    <AppLayoutLinks />
    <slot />
  </div>
</template>

<script>
import AppLayoutLinks from '@/layouts/AppLayoutLinks.vue'
export default {
  name: "AppLayoutHome",
  components: {
    AppLayoutLinks
  }
}
</script>