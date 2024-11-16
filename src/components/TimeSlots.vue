<script setup lang="ts">
import { useSchedulerStore } from '@/stores/scheduler'
import TimeSlotsItem from './TimeSlotsItem.vue'
import { days, type Day } from '@/lib/days'

const schedulerStore = useSchedulerStore()
function changeTimeSlot(day: Day, value: string[]) {
  schedulerStore.scheduler.timeSlots[day] = value
}
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
        :value="schedulerStore.scheduler.timeSlots[day]"
        @change="changeTimeSlot(day, $event)"
      />
    </div>
  </div>
</template>
