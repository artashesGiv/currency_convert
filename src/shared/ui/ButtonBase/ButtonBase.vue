<template>
  <button :class="classes" :disabled="isDisabled" @click="onCLick">
    <transition name="fade" mode="out-in">
      <span v-if="!isLoading" class="button__content">
        <span v-if="text">{{ text }}</span>
        <icon-base v-if="icon" :name="icon" class="button__icon" />
      </span>
      <spinner-base v-else />
    </transition>
  </button>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import type { IconsId } from '@/shared'

export type ButtonBaseProps = {
  text?: string
  view?: 'brand' | 'secondary'
  size?: 's' | 'm'
  icon?: IconsId
  isDisabled?: boolean
  isRounded?: boolean
  isLoading?: boolean
}

type ButtonEmit = {
  (emit: 'click', event: Event): void
}

const props = withDefaults(defineProps<ButtonBaseProps>(), {
  view: 'brand',
  size: 'm',
})

const emit = defineEmits<ButtonEmit>()

const isOnlyIcon = computed(() => !!props.icon && !props.text)

const classes = computed(() => [
  'button',
  `button--view-${props.view}`,
  `button--size-${props.size}`,
  { 'is-disabled': props.isDisabled || props.isLoading },
  { 'is-rounded': props.isRounded },
  { 'is-only-icon': isOnlyIcon.value },
])

const onCLick = (event: Event) => {
  emit('click', event)
}
</script>

<style scoped lang="scss">
.button {
  $b: &;

  display: flex;
  border-radius: 8px;
  cursor: pointer;
  justify-content: center;
  gap: 3px;
  font-weight: 500;
  align-items: center;
  padding: 0 20px;
  transition: var(--transition-base);

  &__content {
    @include row(10px);
  }

  &--view {
    &-brand {
      background: var(--brand-color);
      color: var(--black-color-2);

      &:hover {
        background-color: var(--brand-color-light);
      }
    }

    &-secondary {
      background: var(--black-color-3);
      color: var(--gray-color-2);

      &:hover {
        color: var(--brand-color-light);
        box-shadow: 0 0 0 1px var(--brand-color-light);
      }
    }
  }

  &--size {
    &-s {
      height: 32px;
      width: 32px;
      font-size: 14px;

      #{$b}__icon {
        font-size: 16px;
      }
    }

    &-m {
      height: 40px;
      width: 40px;
      font-size: 16px;

      #{$b}__icon {
        font-size: 18px;
      }
    }
  }

  &.is-disabled {
    @include isDisabled;
  }

  &.is-rounded {
    border-radius: 1000px;
  }

  &.is-only-icon {
    padding: 0;
  }

  &:not(.is-only-icon) {
    width: 100%;
  }
}
</style>
