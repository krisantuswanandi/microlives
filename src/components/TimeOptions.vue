<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { timeOptions, formatTime } from '@/lib/time'

const props = defineProps<{
  value: string
}>()

const emit = defineEmits<{
  (e: 'changeSlots', value: string): void
}>()

const localVal = ref(props.value)

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
