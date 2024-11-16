<script setup lang="ts">
import { ref } from 'vue'
import { useSchedulerStore } from '@/stores/scheduler'

const schedulerStore = useSchedulerStore()

const timeOptions = ref<number[]>([])
for (let i = 700; i <= 1900; i += 25) {
  timeOptions.value.push(i)
}

function formatTime(time: number) {
  let _hour = Math.floor(time / 100)
  _hour = _hour > 12 ? _hour - 12 : _hour

  const ampm = time < 1200 ? 'am' : 'pm'
  const hour = _hour.toString().padStart(2, '0')
  let min = '00'
  if (time % 100 === 25) min = '15'
  if (time % 100 === 50) min = '30'
  if (time % 100 === 75) min = '45'

  return `${hour}:${min} ${ampm}`
}
</script>

<template>
  <div class="max-w-screen-sm m-auto">
    <pre class="py-4">{{ schedulerStore.timeSlots }}</pre>
    <table class="w-full border">
      <thead>
        <tr class="border">
          <th class="p-1 border"></th>
          <th class="p-1 border w-[14%]">Mon</th>
          <th class="p-1 border w-[14%]">Tue</th>
          <th class="p-1 border w-[14%]">Wed</th>
          <th class="p-1 border w-[14%]">Thu</th>
          <th class="p-1 border w-[14%]">Fri</th>
          <th class="p-1 border w-[14%]">Sat</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="timeOption in timeOptions" :key="timeOption">
          <td class="p-1 border">{{ formatTime(timeOption) }}</td>
          <td class="p-1 border w-[14%]"></td>
          <td class="p-1 border w-[14%]"></td>
          <td class="p-1 border w-[14%]"></td>
          <td class="p-1 border w-[14%]"></td>
          <td class="p-1 border w-[14%]"></td>
          <td class="p-1 border w-[14%]"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
