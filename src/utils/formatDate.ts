// referência na formatação de data ISO 8601 -> https://gist.github.com/MrChocolatine/367fb2a35d02f6175cc8ccb3d3a20054

export const formatDate = (isoDateString: string): string => {
  const date = new Date(isoDateString)
  const now = new Date()

  const isToday = date.toDateString() === now.toDateString()
  const isYesterday =
    new Date(now.setDate(now.getDate() - 1)).toDateString() ===
    date.toDateString()

  if (isToday) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
  if (isYesterday) {
    return 'Yesterday'
  }
  return date.toLocaleDateString()
}
