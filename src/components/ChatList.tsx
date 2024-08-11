import { useEffect } from 'react'
import ChatListItem from './ChatListItem'
import { useChatStore } from '@/store/useChatStore'
import ChatListSearch from './ChatListSearch'

function ChatList() {
  const { items, fetchItems, searchContent, filter } = useChatStore()

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  const filteredItems = items
    .filter(item =>
      item.name.toLowerCase().includes(searchContent.toLowerCase())
    )
    .filter(item => {
      if (filter === 'unread') {
        return !item.isRead
      }
      if (filter === 'groups') {
        return item.isGroup
      }
      return true
    })

  return (
    <div className="flex flex-col max-w-full bg-dark-black">
      <h1 className='h-[60px] px-6 flex items-center font-bold text-2xl text-light-gray'>Chats</h1>
      <ChatListSearch />
      {filteredItems.map((item, index) => (
        <ChatListItem key={index} item={item} />
      ))}
    </div>
  )
}

export default ChatList
