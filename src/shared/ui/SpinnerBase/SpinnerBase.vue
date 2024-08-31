<template>
  <div :class="['spinner', `spinner--size-${size}`]">
    <svg v-bind="svgAttrs">
      <defs>
        <linearGradient :id="gradientsId.a">
          <stop offset="0%" stop-opacity="0" stop-color="currentColor" />
          <stop offset="100%" stop-opacity=".5" stop-color="currentColor" />
        </linearGradient>
        <linearGradient :id="gradientsId.b">
          <stop offset="0%" stop-color="currentColor" />
          <stop offset="100%" stop-opacity=".5" stop-color="currentColor" />
        </linearGradient>
      </defs>
      <g stroke-width="15">
        <path
          :stroke="`url(#${gradientsId.a})`"
          d="M15 100a85 85 0 0 1 170 0"
        />
        <path
          :stroke="`url(#${gradientsId.b})`"
          d="M185 100a85 85 0 0 1-170 0"
        />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export type SpinnerProps = {
  size?: 's'
  view?: 'dark' | 'light'
}

const props = withDefaults(defineProps<SpinnerProps>(), {
  size: 's',
  view: 'dark',
})

const gradientsId = {
  a: `spinner--a`,
  b: `spinner--b`,
}

const svgAttrs = computed(() => {
  {
    const mapColors = {
      dark: '#262626',
      light: '#b4b4b4',
    } as Record<NonNullable<SpinnerProps['view']>, string>

    return {
      color: mapColors[props.view],
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: `0 0 200 200`,
      width: '200',
      height: '200',
    }
  }
})
</script>

<style scoped lang="scss">
.spinner {
  position: relative;
  border-radius: 100%;
  overflow: hidden;

  img,
  svg {
    display: block;
    width: 100%;
    height: 100%;
    animation: rotate360 1s infinite linear;
  }

  &--size {
    &-s {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
