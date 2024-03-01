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

      <div class="search"></div>

      <form class="max-w-md mx-auto">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

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
          <HeadlessMenuButton
            class="flex w-9 shrink-0 items-center justify-center rounded-full border bg-red"
          >
            <img
              src="/assets/image/Notri.webp"
              alt="Logged user"
              class="w-full h-full bg-white"
            />
          </HeadlessMenuButton>
        </HeadlessMenu>
        <P>JOHN DOE</P>

        <HeadlessMenu as="div" class="relative">
          <HeadlessMenuButton
            class="flex w-9 shrink-0 items-center justify-center rounded-full border bg-red"
          >
            <img
              src="/assets/image/avatar1.png"
              alt="Logged user"
              class="w-full h-full"
            />
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
