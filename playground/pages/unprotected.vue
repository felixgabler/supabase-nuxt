<!-- eslint-disable no-console -->
<script setup lang="ts">
const { data } = await useUser(); 
</script>

<template>
  <div style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      gap: 20px;
    ">
    User: {{ data + '' }}
    <NuxtLink to="/login">
      Go to login page
    </NuxtLink>
  </div>
</template>
