export const getRandom = (max: number, min = 1) => Math.floor(Math.random() * max) + min

export const tagsColor: { [key: number]: string } = {
  1: 'badge-info',
  2: 'badge-warning',
  3: 'badge-error',
  4: 'badge-success',
  5: 'badge-primary',
  6: 'badge-secondary',
  7: 'badge-accent',
}
