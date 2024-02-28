<template>
  <div class="grid lg:grid-cols-2flex-1 justify-center">
    <div
      class="place-self-center w-full p-8 md:px-16 lg:px-24 xl:px-36 2xl:px-52"
    >
      <header class="text-center mb-6">
        <div class="flex justify-center">
          <img src="/assets/Image/Coat.png" class="w-11 h-11" alt="" />

          <h3 class="mt-3">Abuja</h3>
        </div>
      </header>
      <div class="shadow-xl bg-white h-72 w-96 rounded-lg mb-10 mt-3">
        <h1 class="font-bold text-center text-2xl py-5">Welcome to Tespire Public</h1>
        <h3 class="text-center">Please Select your role to proceed</h3>

        <form action="" class="mt-2 mx-6 mb-11">
          <div>
            <button 
            class="bg-gray-200 w-full p-1 mt-1 text-center flex text-white rounded-lg hover:opacity-90"
          ><img src="/assets/Image/Coat.png" class="w-9 h-9" alt="" /><span class="text-black mt-2" >Ministry Login</span></button>
          </div>
          <div>
            <button 
            class="bg-gray-200 flex  w-full p-1 mt-7 text-cente rounded-lg hover:opacity-90"
          ><img src="/assets/Image/school.jpg" class="w-9 h-9 bg-gray-300" alt="" /><span class="text-black mt-2 mx-3" >School Login</span></button>
          </div>
          
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
