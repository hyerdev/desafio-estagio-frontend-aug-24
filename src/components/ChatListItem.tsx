import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import ReadIcon from './ReadIcon'
import DownArrowIcon from './DownArrowIcon'

function ChatListItem() {
  return (
    <div className="max-w-[500px] w-full h-[72px] flex bg-dark-black cursor-pointer hover:bg-light-black relative group">
      <div className="flex items-center px-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-[420px] pr-4 flex flex-col justify-center relative">
        <div className="flex items-center justify-between">
          <p className="text-light-gray">Rodolpho Nikerson</p>
          <span className="text-xs text-normal-gray">Yesterday</span>
        </div>
        <div className="flex mt-1 items-center justify-between">
          <div className="text-sm flex gap-1">
            <ReadIcon color="#8696A0" />
            <p className="text-normal-gray line-clamp-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              dasdasdsadas
            </p>
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
