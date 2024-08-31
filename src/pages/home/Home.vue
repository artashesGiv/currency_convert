<template>
  <div class="home">
    <div>{{ title }}</div>
    <button-base text="text" icon="convert" @click="onClick" />
    <button-base text="text" icon="convert" is-disabled @click="onClick" />
    <button-base
      text="text"
      icon="convert"
      is-disabled
      size="s"
      @click="onClick"
    />
    <button-base
      text="text"
      icon="convert"
      is-disabled
      :is-loading="isLoading"
      @click="onClick"
    />
    <button-base text="text" icon="convert" is-rounded @click="onClick" />
    <button-base
      text="text"
      icon="convert"
      is-rounded
      :is-loading="isLoading"
      @click="onClick"
    />
    <button-base icon="convert" @click="onClick" />
    <button-base icon="convert" :is-loading="isLoading" @click="onClick" />
    <button-base
      icon="convert"
      :is-loading="isLoading"
      size="s"
      @click="onClick"
    />
    <button-base icon="convert" is-rounded @click="onClick" />
    <button-base icon="convert" is-rounded @click="onClick" />
    <button-base icon="convert" is-rounded size="s" @click="onClick" />
    <button-base
      icon="convert"
      is-rounded
      :is-loading="isLoading"
      @click="onClick"
    />
  </div>
</template>

<script setup lang="ts">
import { ButtonBase, usePageData } from '@/shared'
import { ref } from 'vue'

const { title } = usePageData()

const isLoading = ref(false)
const onClick = () => {
  isLoading.value = !isLoading.value
}
</script>

<style scoped lang="scss">
.home {
  @include column(10px);
}
</style>
