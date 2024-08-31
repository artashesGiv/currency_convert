<template>
  <div :class="['select', { 'is-open': isOpen }]">
    <div
      v-click-outside="closeOptions"
      class="select__field"
      @click="toggleSelect(!isOpen)"
    >
      <div class="select__content">
        <span v-if="!isValue && placeholder" class="select__placeholder">
          {{ placeholder }}
        </span>
        <span v-else class="select__value">
          {{ getOptionText(modelValue) }}
        </span>
      </div>
      <icon-base name="chevron-down" class="select__icon" />
    </div>
    <transition name="fade" mode="in-out">
      <div v-if="isOpen" class="select__options" @click.stop>
        <div
          v-for="option in options"
          :key="option.id"
          class="select__item"
          :class="getActiveClasses(option.id)"
          @click="onSelect(option.id)"
        >
          {{ option.text }}
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'

export type Option = {
  id: string | number
  text: string
}

export type SelectBaseProps = {
  modelValue: Maybe<Option['id']>
  options: Option[]
  placeholder?: string
  isDisabled?: boolean
}

type SelectEmit = {
  (emit: 'update:modelValue', value: SelectBaseProps['modelValue']): void
}

const props = defineProps<SelectBaseProps>()
const emit = defineEmits<SelectEmit>()

const isOpen = ref(false)

const isValue = computed(() => {
  return props.modelValue !== null && props.modelValue !== undefined
})

const getActiveClasses = (id: Option['id']) => {
  return id === props.modelValue ? 'select__item--active' : ''
}

const getOptionText = (id: SelectBaseProps['modelValue']): string => {
  const option = props.options.find(option => option.id === id)
  return option ? option.text : ''
}

const toggleSelect = (value: boolean) => {
  isOpen.value = value
}

const closeOptions = () => toggleSelect(false)

const onSelect = (value: Option['id']) => {
  if (value === props.modelValue) {
    emit('update:modelValue', null)
  } else {
    emit('update:modelValue', value)
  }

  closeOptions()
}
</script>

<style scoped lang="scss">
.select {
  $b: &;

  position: relative;
  width: 100%;

  &__placeholder {
    color: var(--gray-color-1);
  }

  &__field {
    @include row;

    align-items: center;
    border: 2px solid var(--gray-color-2);
    height: 40px;
    padding: 0 8px;
    border-radius: 8px;
    cursor: pointer;
    transition: var(--transition-base);

    &:hover {
      border-color: var(--brand-color-light);
      color: var(--brand-color-light);
    }
  }

  &__content {
    @include row;

    flex-grow: 1;
  }

  &__value {
    @include row;

    align-items: center;
    font-weight: 600;
  }

  &__options {
    @include column(4px);

    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    width: 100%;
    border-radius: 8px;
    padding: 8px;
    box-shadow: var(--base-shadow);
    background-color: var(--black-color-3);
  }

  &__item {
    height: 30px;
    cursor: pointer;
    padding: 8px 16px;
    font-size: 11px;
    color: var(--body-text);
    border-radius: 8px;
    transition: var(--transition-base);

    &--active {
      color: var(--white-color);
      background-color: var(--brand-color);
    }

    &:not(&--active):hover {
      color: var(--black-color-3);
      background-color: var(--brand-color-light);
    }
  }

  &__icon {
    font-size: 20px;
    transition: transform 0.3s ease;
  }

  &.is-open {
    #{$b}__icon {
      transform: rotate(180deg);
    }
  }
}
</style>
