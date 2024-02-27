<template>
  <div class="grid lg:grid-cols-2 h-screen justify-center">
    <div
      class="place-self-center w-full p-8 md:px-16 lg:px-24 xl:px-36 2xl:px-52"
    >
      <header class="text-center mb-6">
        <div class="flex justify-center">
          <img src="/assets/Image/Coat.png" class="w-11 h-11" alt="" />

          <h3 class="mt-3">Abuja</h3>
        </div>
      </header>
      <div class="shadow-xl rounded-lg mb-10 mt-3">
        <h1 class="font-bold text-center">Welcome to Tespire Public</h1>
        <h3 class="text-center">Enter your details to login to the account</h3>

        <form action="" class="mt-5 mx-6 mb-11">
          <div>
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Email</label
            >
            <input
              type="text"
              id="company"
              class="bg-gray-50 border mt-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter email"
              required
            />
          </div>
          <div>
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
              >Password</label
            >
            <input
              type="password"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Password"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <span class="justify-end flex text-blue-500 cursor-pointer">Forgot Password</span>
          <button class="bg-slate-700 w-full p-3 mt-1 text-center text-white rounded-lg hover:opacity-90">Login</button>
          <footer class="text-center mt-8">
            <span class="mb-6">(c) 2024 Tespaire, all right reserved</span>
          </footer>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
