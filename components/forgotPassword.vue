<template>
  <div class="grid lg:grid-cols-2flex-1 justify-center">
    <div
      class="place-self-center w-full p-8 md:px-16 lg:px-24 xl:px-36 2xl:px-52"
    >
      <div class="shadow-xl bg-white w-96 h-96 rounded-lg mb-10 ">
        <h1 class="font-bold text-center text-2xl py-5">Reset Password</h1>
        <h3 class="text-center mx-6">
          Enter the email account associated with your Tespire public account
          and we will send a link to your email account
        </h3>

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
        
          <button
            class="bg-slate-700 w-full p-2 mt-6 text-center text-white rounded-lg hover:opacity-90"
          >
            Reset Password
          </button>
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
