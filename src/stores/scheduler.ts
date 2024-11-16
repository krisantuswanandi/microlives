import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSchedulerStore = defineStore('scheduler', () => {
  const visitDuration = ref('100')
  const noOfBooking = ref(0)
  const allowVideo = ref(true)

  const timeSlots = ref({
    mon: [''],
    tue: [''],
    wed: [''],
    thu: [''],
    fri: [''],
    sat: [''],
    sun: [''],
  })

  return { visitDuration, noOfBooking, allowVideo, timeSlots }
})
