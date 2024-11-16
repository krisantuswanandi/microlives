<script setup lang="ts">
import CalendarView from '@/components/CalendarView.vue'
import SessionForm from '@/components/SessionForm.vue'
import TimeSlots from '@/components/TimeSlots.vue'
</script>

<template>
  <div class="max-w-screen-sm m-auto">
    <SessionForm />
    <TimeSlots class="mt-8" />
    <CalendarView />
  </div>
</template>
