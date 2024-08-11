import { useChatStore } from '@/store/useChatStore'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Filter } from './icons'

function ChatListFilter() {
  const setFilter = useChatStore((state) => state.setFilter)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Filter />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-base">
          Conversations
        </DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setFilter('unread')}>
          Unread messages
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setFilter('groups')}>
          Groups
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ChatListFilter
