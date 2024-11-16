export const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const

export type Day = (typeof days)[number]
