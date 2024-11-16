<script setup lang="ts">
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldInput,
  NumberFieldIncrement,
} from '@/components/ui/number-field'
import { Checkbox } from '@/components/ui/checkbox'
import { useSchedulerStore } from '@/stores/scheduler'

const store = useSchedulerStore()
</script>

<template>
  <div class="max-w-60">
    <div>
      <Label for="visit-duration">Visit Duration</Label>
      <Select id="visit-duration" v-model="store.scheduler.visitDuration">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="25">15 min</SelectItem>
          <SelectItem value="50">30 min</SelectItem>
          <SelectItem value="75">45 min</SelectItem>
          <SelectItem value="100">60 min</SelectItem>
          <SelectItem value="150">90 min</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div class="mt-4">
      <Label for="no-of-booking">No. of Booking / Session</Label>
      <NumberField id="no-of-booking" :min="1" :max="10" v-model="store.scheduler.noOfBooking">
        <NumberFieldContent>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldContent>
      </NumberField>
    </div>
    <div class="mt-4 flex items-center gap-1">
      <Checkbox id="allow-video" v-model:checked="store.scheduler.allowVideo" />
      <Label for="allow-video">Allow video tour call</Label>
    </div>
  </div>
</template>
