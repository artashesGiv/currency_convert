<template>
  <i :class="classes" />
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import type { IconsId } from '@/shared'

export type IconBaseProps = {
  name: IconsId
}

const props = defineProps<IconBaseProps>()

const classes = computed(() => ['icon-base', `icon-${props.name}`])

watch(props, () => {
  classes.value
})
</script>

<style lang="scss" scoped>
.icon-base {
  display: inline-block;
  font-weight: 400;

  &::before {
    font-family: $icon;
    display: block;
    font-size: inherit;
    color: inherit;
    line-height: 1;
  }
}
</style>
