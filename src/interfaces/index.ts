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
  searchContent: string
  fetchItems: () => void
  setSearchTxt: (searchTxt: string) => void
}

export interface AvatarSectionProps {
  avatarUrl: string
  name: string
}

export interface ChatItemHeaderProps {
  name: string
  lastInteraction: string
}

export interface ChatMessageProps {
  isGroup: boolean
  isRead: boolean
  message: string
  groupMessager?: string
  isMuted: boolean
}
