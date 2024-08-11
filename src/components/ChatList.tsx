import { useEffect } from 'react'
import ChatListItem from './ChatListItem'
import { useChatStore } from '@/store/useChatStore'
import ChatListSearch from './ChatListSearch'
import { filterItems } from '@/utils/filterItems'

function ChatList() {
  const { items, fetchItems, searchContent, filter } = useChatStore()

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  const filteredItems = filterItems(items, searchContent, filter)

  return (
    <div className="flex flex-col h-full max-w-full bg-dark-black sm:w-[500px]">
      <h1 className='h-[60px] px-6 flex items-center font-bold text-2xl text-light-gray'>Chats</h1>
      <ChatListSearch />
      <div className='overflow-y-auto scrollbar w-full'>
        {filteredItems.map((item, index) => (
          <ChatListItem key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default ChatList
