import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import ReadIcon from './ReadIcon'
import DownArrowIcon from './DownArrowIcon'
import { ChatItem } from '@/interfaces'
import MutedIcon from './MutedIcon'

function ChatListItem({ item }: { item: ChatItem }) {
  const { avatarUrl, isGroup, isMuted, isRead, lastInteraction, message, name, groupMessager } = item
  return (
    <div className="max-w-[500px] w-full h-[72px] flex bg-dark-black cursor-pointer hover:bg-light-black relative group">
      <div className="flex items-center px-4">
        <Avatar>
          <AvatarImage src={avatarUrl} alt="Profile Picture" />
          <AvatarFallback>{name[0] || "?"}</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-[420px] pr-4 flex flex-col justify-center relative">
        <div className="flex items-center justify-between">
          <p className="text-light-gray">{name}</p>
          <span className="text-xs text-normal-gray">{lastInteraction}</span>
        </div>
        <div className="flex mt-1 items-center justify-between">
          <div className="text-sm flex gap-1">
            {!isGroup && <ReadIcon color={isRead ? "#E9EDEF" : "#8696A0"} />}
            <div>
              <p className="text-normal-gray line-clamp-1">
                {groupMessager && `${groupMessager}: `} {message}
              </p>
            </div>
            <p>{isMuted && <MutedIcon />}</p>
          </div>
          <div className="transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200 ease-in-out">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <DownArrowIcon />
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
        </div>
        <span className="w-full h-[1px] absolute bottom-0 bg-light-black"></span>
      </div>
    </div>
  )
}

export default ChatListItem
