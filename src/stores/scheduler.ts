import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useSchedulerStore = defineStore('scheduler', () => {
  const scheduler = useLocalStorage('saved-data', {
    visitDuration: '100',
    noOfBooking: 1,
    allowVideo: true,
    timeSlots: {
      mon: { enabled: false, slots: [''] },
      tue: { enabled: false, slots: [''] },
      wed: { enabled: false, slots: [''] },
      thu: { enabled: false, slots: [''] },
      fri: { enabled: false, slots: [''] },
      sat: { enabled: false, slots: [''] },
      sun: { enabled: false, slots: [''] },
    },
  })

  return { scheduler }
})
