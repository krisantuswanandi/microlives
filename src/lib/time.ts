function generateTimeOptions() {
  let options = []
  for (let i = 700; i <= 1900; i += 25) {
    options.push(i)
  }
  return options
}

export const timeOptions = generateTimeOptions()

export function formatTime(time: number) {
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
