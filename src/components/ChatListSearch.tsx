import { useChatStore } from '@/store/useChatStore'
import { Search } from './icons'
import { Input } from './ui/input'
import ChatListFilter from './ChatListFilter'

function ChatListSearch() {
  const setSearchTxt = useChatStore((state) => state.setSearchTxt)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTxt(e.target.value)
  }

  return (
    <div className="max-w-[-webkit-fill-available] w-full h-[36px] flex items-center mb-2 mx-4">
      <div className="w-full px-4 mr-2 flex items-center bg-light-black rounded-lg">
        <Search />
        <Input placeholder="Search" onChange={handleSearch} />
      </div>
      <ChatListFilter />
    </div>
  )
}

export default ChatListSearch
