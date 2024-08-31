<template>
  <input
    v-model="model"
    :placeholder="placeholder"
    :disabled="isDisabled"
    :type="type"
    :class="['input-base', { 'is-disabled': isDisabled }]"
  />
</template>
<script setup lang="ts">
export type InputBaseProps = {
  modelValue: string | number
  placeholder?: string
  isDisabled?: boolean
  isError?: string
  type?: 'text' | 'number'
}

withDefaults(defineProps<InputBaseProps>(), {
  type: 'text',
})

const model = defineModel<InputBaseProps['modelValue']>()
</script>

<style scoped lang="scss">
.input-base {
  height: 40px;
  width: 100%;
  padding: 0 20px;
  background-color: var(--black-color-1);
  outline: none;
  border: 1.5px solid var(--gray-color-1);
  border-radius: 8px;
  font-size: 16px;
  color: var(--gray-color-1);
  transition: var(--transition-base);

  &::placeholder {
    color: var(--gray-color-1);
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:hover,
  &:active {
    border-color: var(--brand-color-light);
  }

  &.is-disabled {
    @include isDisabled;
  }
}
</style>
