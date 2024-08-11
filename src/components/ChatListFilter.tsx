import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Filter } from './icons'

function ChatListFilter() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Filter />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-base">
          Conversations
        </DropdownMenuLabel>
        <DropdownMenuItem>Unread messages</DropdownMenuItem>
        <DropdownMenuItem>Groups</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ChatListFilter
