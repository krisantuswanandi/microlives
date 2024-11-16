<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

const props = defineProps<{
  value: string
}>()

const emit = defineEmits<{
  (e: 'changeSlots', value: string): void
}>()

const localVal = ref(props.value)

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

watch(
  () => props.value,
  (val) => {
    localVal.value = val
  },
)

watch(localVal, (val) => {
  emit('changeSlots', val)
})
</script>

<template>
  <Select v-model="localVal">
    <SelectTrigger>
      <SelectValue class="w-20" placeholder="Select" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem v-for="n in timeOptions" :key="n" :value="n.toString()">
        {{ formatTime(n) }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>
