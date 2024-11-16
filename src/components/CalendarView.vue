<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { timeOptions, formatTime } from '@/lib/time'

function firstDateOfTheWeek(current = new Date()) {
  const monday = new Date(current)
  monday.setDate(current.getDate() - current.getDay() + 1)
  return monday
}

const monday = ref(firstDateOfTheWeek())

const displayedDates = computed(() => {
  const dates: Date[] = []
  for (let i = 0; i <= 5; i++) {
    const _date = new Date(monday.value)
    _date.setDate(_date.getDate() + i)
    dates.push(_date)
  }
  return dates
})

const title = computed(() => {
  const start = displayedDates.value[0]
  const startYear = start.getFullYear()
  const startMonth = start.toLocaleString('en-US', { month: 'long' })
  const startMonthShort = startMonth.substring(0, 3)

  const end = displayedDates.value[5]
  const endYear = end.getFullYear()
  const endMonth = end.toLocaleString('en-US', { month: 'long' })
  const endMonthShort = endMonth.substring(0, 3)

  if (startMonth === endMonth && startYear === endYear) {
    return `${startMonth} ${startYear}`
  }

  if (startYear === endYear) {
    return `${startMonthShort} - ${endMonthShort} ${endYear}`
  }

  return `${startMonthShort} ${startYear} - ${endMonthShort} ${endYear}`
})

function prevWeek() {
  const _date = new Date(monday.value)
  _date.setDate(_date.getDate() - 7)
  monday.value = _date
}

function nextWeek() {
  const _date = new Date(monday.value)
  _date.setDate(_date.getDate() + 7)
  monday.value = _date
}

function todaysWeek() {
  monday.value = firstDateOfTheWeek()
}
</script>

<template>
  <div>
    <div class="flex items-center gap-1 mb-4">
      <Button variant="outline" size="icon" @click="prevWeek">
        <ChevronLeft />
      </Button>
      <Button variant="outline" size="icon" @click="nextWeek">
        <ChevronRight />
      </Button>
      <div class="text-lg ml-2 font-bold">{{ title }}</div>
      <Button variant="outline" class="ml-auto" @click="todaysWeek">Today</Button>
    </div>
    <table class="w-full">
      <thead>
        <tr class="bg-zinc-100">
          <th class="border"></th>
          <th
            v-for="date in displayedDates"
            class="p-2 border w-[15%] capitalize"
            :key="date.toISOString()"
          >
            <span class="block text-xs">
              {{ date.toLocaleString('en-US', { weekday: 'short' }) }}
            </span>
            <span class="block text-lg leading-tight">
              {{ date.getDate() }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="timeOption in timeOptions" :key="timeOption">
          <td class="border bg-zinc-100">
            <span class="h-4 flex items-center justify-center text-xs text-zinc-400">
              {{ formatTime(timeOption) }}
            </span>
          </td>
          <th
            v-for="date in displayedDates"
            class="border capitalize"
            :key="date.toISOString()"
          ></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
