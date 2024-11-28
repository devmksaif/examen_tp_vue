<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <div class="flex-1 p-4  grid-flow-col grid items-center  ">
      <div class="p-4 text-right">
        <router-link to="/"></router-link>
        <router-link to="/ex1" class="mr-10">Exercice 1</router-link>
        <router-link to="/ex2">Exercice 2</router-link>
 
      </div>
      
      <div>
 
      </div>
    </div>
  </nav>
  <main class="items-start flex-1">
    <router-view />
  </main>
</template>