<script setup lang="ts">
import { useSchedulerStore } from '@/stores/scheduler'
import TimeSlotsItem from './TimeSlotsItem.vue'
import { days } from '@/lib/days'

const schedulerStore = useSchedulerStore()
</script>

<template>
  <div class="border rounded-md p-4">
    <div>
      <div class="text-xl font-semibold">Availability</div>
      <div class="text-sm">Set your weekly recurring schedule</div>
    </div>
    <div class="mt-4">
      <TimeSlotsItem
        v-for="day in days"
        :key="day"
        :day="day"
        :enabled="schedulerStore.scheduler.timeSlots[day].enabled"
        :slots="schedulerStore.scheduler.timeSlots[day].slots"
        @change-enabled="schedulerStore.scheduler.timeSlots[day].enabled = $event"
        @change-slots="schedulerStore.scheduler.timeSlots[day].slots = $event"
      />
    </div>
  </div>
</template>
