<template>
  <div class="page-layout">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
export type PageLayoutProps = {}
</script>

<style scoped lang="scss">
.page-layout {
  padding: 50px 20px 50px 20px;
  height: 100%;
}
</style>
