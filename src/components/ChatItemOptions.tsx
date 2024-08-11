import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DownArrow } from './icons'

const ChatItemOptions = () => (
  <div className="transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200 ease-in-out">
    <DropdownMenu>
      <DropdownMenuTrigger>
        <DownArrow />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Archive chat</DropdownMenuItem>
        <DropdownMenuItem>Mute notifications</DropdownMenuItem>
        <DropdownMenuItem>Delete chat</DropdownMenuItem>
        <DropdownMenuItem>Pin chat</DropdownMenuItem>
        <DropdownMenuItem>Mark as unread</DropdownMenuItem>
        <DropdownMenuItem>Block</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
)

export default ChatItemOptions
