<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Button } from '@/components/ui/button'
</script>

<template>
  <header class="p-4">
    <nav class="flex justify-center">
      <Button variant="link" as-child>
        <RouterLink to="/scheduler-settings">Scheduler Settings</RouterLink>
      </Button>
      <Button variant="link" as-child>
        <RouterLink to="/scheduler-view">Scheduler View</RouterLink>
      </Button>
    </nav>
  </header>
  <main class="p-4">
    <RouterView />
  </main>
</template>
