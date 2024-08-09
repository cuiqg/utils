export const isValidUrl = (url) => {
  try {
    new URL(url)
    return true
  }
  catch {
    return false
  }
}

export const getSearchParams = (url) => {
  const params = new URL(url).searchParams
  return Object.fromEntries(params)
}
