<script setup lang="ts">
import { ref, watch } from 'vue'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import TimeOptions from '@/components/TimeOptions.vue'
import { Trash2, Plus } from 'lucide-vue-next'
import { useSchedulerStore } from '@/stores/scheduler'
import { type Day } from '@/lib/days'

const props = defineProps<{ day: Day; enabled: boolean; slots: string[] }>()

const emit = defineEmits<{
  (e: 'changeEnabled', value: boolean): void
  (e: 'changeSlots', value: string[]): void
}>()

const schedulerStore = useSchedulerStore()

const enabled = ref(props.enabled)
const timeSlots = ref(props.slots)

function addSlot(index: number) {
  timeSlots.value.splice(index + 1, 0, '')
}

function removeSlot(index: number) {
  if (timeSlots.value.length > 1) {
    timeSlots.value.splice(index, 1)
  } else {
    timeSlots.value[0] = ''
  }
}

function calculateEndTime(start: string) {
  const startTime = parseInt(start)
  const duration = parseInt(schedulerStore.scheduler.visitDuration)
  const endTime = startTime + duration
  return !isNaN(endTime) ? endTime.toString() : ''
}

watch(
  timeSlots,
  (val) => {
    emit('changeSlots', val)
  },
  { deep: true },
)

watch(enabled, (val) => {
  emit('changeEnabled', val)
})
</script>

<template>
  <div class="flex items-start py-4 border-b" :class="day === 'sun' ? 'border-none' : ''">
    <div class="flex items-center mt-1">
      <Checkbox v-model:checked="enabled" />
      <div class="font-semibold min-w-20 capitalize ml-2">{{ day }}</div>
    </div>
    <div class="flex-1">
      <div
        class="flex items-center gap-2 mt-2 first:mt-0"
        v-for="(timeSlot, i) in timeSlots"
        :key="i"
      >
        <TimeOptions :value="timeSlot" @change="timeSlots[i] = $event" />
        <span>-</span>
        <TimeOptions disabled :value="calculateEndTime(timeSlot)" />
        <div class="flex gap-2 ml-4">
          <Button variant="outline" size="icon" @click="removeSlot(i)">
            <Trash2 class="text-zinc-400" />
          </Button>
          <Button variant="outline" size="icon" @click="addSlot(i)">
            <Plus class="text-zinc-400" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
