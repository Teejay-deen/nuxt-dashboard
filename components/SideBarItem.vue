<template>
  <div class="flex flex-col">
    <template v-for="(l, i) in links" : key="i">
      <NuxtLink v-if="!l.items" to="/" class="inline-flex items-center gap-4 px-4 p-3 text-left text-[15px]">
        <Icon name="l.Icon" class="h-5 w-5 text-muted-foreground"  />
        <p>{{ l.title }}</p>
      </NuxtLink>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '#build/components';

const props = defineProps<{
  links?: any[]
}>();
</script>

<style>

</style>