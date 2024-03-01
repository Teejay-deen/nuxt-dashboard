<template>
  <aside class="sticky top{65px} h-[(100vh-65px)] py-5">
    <div class="flex h-full w-full flex-col overflow-y-auto rounded-md border bg-white pb-5">
   
    </div>
  </aside>
</template>

<script lang="ts" setup>
const buttonMenu = [
  {
    title: "user management",
    Icon: "",
  },

  {
    title: "Logout",
    Icon: "",
  },
];

const menu = [
  {
    title: "DASHBOARD",
    Icon: ''
  },
  {
    title: "SCHOOL",
    Icon: "",
    items: [
      { title: "list" },
      { title: "create" },
      { title: "edit" },
      { title: "delete" },
    ],
  },
  {
    title: "STUDENTS",
    Icon: "",
    items: [{ title: "list" }],
  },
  {
    title: "TEACHER",
    Icon: "",
    items: [{ title: "list" }],
  },
  {
    title: "REPOERT/ANALYTICS",
    Icon: "",
  },
  {
    title: "COMPLAAIN/REQUEST",
    Icon: "",
  },
];
</script>

<style></style>
