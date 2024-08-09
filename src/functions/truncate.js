export const truncate = (str, length) => {
  if (!str || str.length <= length) return str ?? null
  return `${str.slice(0, length - 3)}...`
}
