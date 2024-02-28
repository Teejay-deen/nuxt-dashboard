<template>
  <div class="grid lg:grid-cols-2flex-1 justify-center">
    <div
      class="place-self-center w-full p-8 md:px-16 lg:px-24 xl:px-36 2xl:px-52"
    >
      <header class="text-center mb-6">
        <div class="flex justify-center"></div>
      </header>
      <div class="shadow-xl bg-white w-96 rounded-lg mb-10 mt-3">
        <h1 class="font-bold text-center py-5 text-2xl">Create New Password</h1>
        <h6 class="text-center">
          New password should be different from previously used password
        </h6>

        <form action="" class="mt-1 mx-6 mb-11">
          <div>
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >New Password</label
            >
            <input
              type="text"
              id="company"
              class="bg-gray-50 border mt-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter new password"
              required
            />
          </div>
          <div class="flex justify-between my-4 mt-4">
            <img src="/assets/image/success.jpg" class="w-6 h-6" alt="" />
            <span  class="text-sm">At least 8 character</span>
            <img src="/assets/image/success.jpg" class="w-6 h-6" alt="" />
            <span class="text-sm">At least one Uppercase</span>
            <img src="/assets/image/success.jpg" class="w-6 h-6" alt="" />
            <span class="text-sm">At least 8 character</span>
            <img src="/assets/image/success.jpg" class="w-6 h-6" alt="" />
            <span class="text-sm">At least 8 character</span>
           
          </div>
          <div>
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
              >Repeat New Password</label
            >
            <input
              type="password"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Repeat New Password"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
            <!-- <img src="/assets/image/eyeSlah.png" class="flex top-3 w-4 h-4" alt=""> -->
          </div>
         
          <button
            class="bg-slate-700 w-full p-3 mt-4 text-center text-white rounded-lg hover:opacity-90"
          >
            Create New Password
          </button>
          <footer class="text-center mt-8">
            <span class="m">(c) 2024 Tespaire, all right reserved</span>
          </footer>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
