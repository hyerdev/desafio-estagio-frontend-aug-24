import { useEffect } from 'react'
import ChatListItem from './ChatListItem'
import { useChatStore } from '@/store/useChatStore'

function ChatList() {
  const { items, fetchItems } = useChatStore()

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  return (
    <div className="flex flex-col max-w-full">
      {items.map((item, index) => (
        <ChatListItem key={index} item={item} />
      )
    )}
    </div>
  )
}

export default ChatList
