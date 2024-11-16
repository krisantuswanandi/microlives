<script setup lang="ts">
import { timeOptions, formatTime } from '@/lib/time'
</script>

<template>
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
</template>
