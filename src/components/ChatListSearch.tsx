import { Search } from './icons'
import { Input } from './ui/input'

function ChatListSearch() {
  return (
    <div className="max-w-[-webkit-fill-available] w-full h-[36px] flex items-center px-4 mb-2 mx-4 bg-light-black rounded-lg">
      <Search />
      <Input placeholder="Search" />
    </div>
  )
}

export default ChatListSearch
