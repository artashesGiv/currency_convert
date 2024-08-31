<template>
  <div class="home">
    <div>{{ title }}</div>
    <button-base text="text" icon="switch" @click="onClick" />
    <button-base text="text" icon="switch" view="secondary" @click="onClick" />
    <button-base text="text" icon="switch" is-disabled @click="onClick" />
    <button-base
      text="text"
      icon="switch"
      is-disabled
      size="s"
      @click="onClick"
    />
    <button-base
      text="text"
      icon="switch"
      is-disabled
      :is-loading="isLoading"
      @click="onClick"
    />
    <button-base text="text" icon="switch" is-rounded @click="onClick" />
    <button-base
      text="text"
      icon="switch"
      is-rounded
      :is-loading="isLoading"
      @click="onClick"
    />
    <button-base icon="switch" @click="onClick" />
    <button-base icon="switch" :is-loading="isLoading" @click="onClick" />
    <button-base
      icon="switch"
      :is-loading="isLoading"
      size="s"
      @click="onClick"
    />
    <button-base icon="switch" is-rounded @click="onClick" />
    <button-base icon="switch" is-rounded @click="onClick" />
    <button-base icon="switch" is-rounded size="s" @click="onClick" />
    <button-base
      icon="switch"
      is-rounded
      size="s"
      view="secondary"
      @click="onClick"
    />
    <button-base
      icon="switch"
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

  padding-top: 50px;
}
</style>
