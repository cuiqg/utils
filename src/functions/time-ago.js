import ms from 'ms'

export const timeAgo = (timestamp, { withAgo = true }) => {
  if (!timestamp) return '从未'

  const diff = Date.now() - new Date(timestamp).getTime()
  if (diff < 1000) {
    return '刚刚'
  }
  else if (diff > 82800000) {
    return new Date(timestamp).toLocaleDateString('zh-CN', {
      month: 'short',
      day: 'numeric',
      year: new Date(timestamp).getFullYear() !== new Date(timestamp).getFullYear()
        ? 'numeric'
        : undefined
    })
  }

  return `${ms(diff)}${withAgo ? ' 前' : ''}`
}
