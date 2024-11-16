import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useSchedulerStore = defineStore('scheduler', () => {
  const scheduler = useLocalStorage('saved-data', {
    visitDuration: '100',
    noOfBooking: 1,
    allowVideo: true,
    timeSlots: {
      mon: [''],
      tue: [''],
      wed: [''],
      thu: [''],
      fri: [''],
      sat: [''],
      sun: [''],
    },
  })

  return { scheduler }
})
