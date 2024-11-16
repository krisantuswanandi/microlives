<script setup lang="ts">
// import CalendarView from '@/components/CalendarView.vue'
import { useSchedulerStore } from '@/stores/scheduler'

const schedulerStore = useSchedulerStore()
</script>

<template>
  <div class="max-w-screen-sm m-auto">
    <pre>{{ schedulerStore.scheduler.timeSlots }}</pre>
    <!-- <CalendarView /> -->
  </div>
</template>
