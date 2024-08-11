import { useEffect } from 'react'
import ChatListItem from './ChatListItem'
import { useChatStore } from '@/store/useChatStore'
import ChatListSearch from './ChatListSearch'

function ChatList() {
  const { items, fetchItems } = useChatStore()

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  return (
    <div className="flex flex-col max-w-full bg-dark-black">
      <h1 className='h-[60px] px-6 flex items-center font-bold text-2xl text-light-gray'>Chats</h1>
      <ChatListSearch />
      {items.map((item, index) => (
        <ChatListItem key={index} item={item} />
      )
    )}
    </div>
  )
}

export default ChatList
