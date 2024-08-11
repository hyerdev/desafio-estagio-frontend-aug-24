import { ChatItem } from '@/interfaces'

export const sortItemsByDate = (items: ChatItem[]): ChatItem[] => {
  return items.sort(
    (a, b) =>
      new Date(b.lastInteraction).getTime() -
      new Date(a.lastInteraction).getTime()
  )
}
