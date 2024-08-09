import punycodeHelper from 'punycode/'

export function punycode(str) {
  if (typeof str !== 'string') return ''
  try {
    return punycodeHelper.toUnicode(str)
  }
  catch {
    return str
  }
}

export function punyEncode(str) {
  if (typeof str !== 'string') return ''
  return punycodeHelper.toASCII(str)
}
