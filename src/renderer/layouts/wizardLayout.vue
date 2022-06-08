<template>
  <div class="wizardLayout">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "AppLayoutHome",
}
</script>

<style lang="scss" scoped>
.wizardLayout{
  background-color: $white;
  height: 100vh;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
</style>
