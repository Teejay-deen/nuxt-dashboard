<template>
  <header class="sticky top-0 z-20 border-bbackdrop-blur">
    <!-- flex container -->
    <div class="container flex h-16 items-center justify-between">
      <!-- logo and page title-->
      <div class="logo flex items-center gap-4">
        <!-- adding the log -->
        <img
          src="/assets/image/Coat.png"
          class="h-11 w-11 object-contain"
          alt=""
        />
        <!-- paga title -->
        <NuxtLink to="/" class="text-xl font-bold">Dashboard</NuxtLink>
      </div>

      <!-- Right side of nav bar -->
      <div class="flex items-center gap-5">
        <button
          @onclick="toggleThemes"
          aria-label="toggle theme"
          class="flex w-9 shrink-0 items-center justify-center rounded-full border bg-red"
        >
          <Icon name="heroicons:sun" class="h-9 w-9" />
        </button>

        <!-- Profile dropdwon menu -->

        <HeadlessMenu as="div" class="relative">
          <HeadlessMenuButton  class="flex w-9 shrink-0 items-center justify-center rounded-full border bg-red">
            <img src="/assets/image/avatar1.png" alt="Logged user" class="w-full h-full">
          </HeadlessMenuButton>
        </HeadlessMenu>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const mode = useColorMode();

const toggleThemes = () => {
  mode.value = mode.value === "light" ? "dark" : "light";
};
</script>

<style></style>
