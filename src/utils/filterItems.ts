import { ChatItem } from '@/interfaces'

export const filterItems = (
  items: ChatItem[],
  searchContent: string,
  filter: string
): ChatItem[] => {
  return items
    .filter((item) =>
      item.name.toLowerCase().includes(searchContent.toLowerCase())
    )
    .filter((item) => {
      if (filter === 'unread') {
        return !item.isRead
      }
      if (filter === 'groups') {
        return item.isGroup
      }
      return true
    })
}
