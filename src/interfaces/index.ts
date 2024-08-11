export interface ChatItem {
  name: string
  avatarUrl: string
  message: string
  groupMessager?: string
  isRead: boolean
  isGroup: boolean
  isMuted: boolean
  lastInteraction: string
}

export interface ChatStore {
  items: ChatItem[]
  fetchItems: () => void
}

export interface AvatarSectionProps {
  avatarUrl: string
  name: string
}
