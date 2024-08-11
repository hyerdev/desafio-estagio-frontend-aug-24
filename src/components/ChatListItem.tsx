import { ChatItem } from '@/interfaces'
import AvatarSection from './AvatarSection'
import ChatItemHeader from './ChatItemHeader'
import ChatItemOptions from './ChatItemOptions'
import ChatItemMessage from './ChatItemMessage'

function ChatListItem({ item }: { item: ChatItem }) {
  const { avatarUrl, isGroup, isMuted, isRead, lastInteraction, message, name, groupMessager } = item
  return (
    <div className="max-w-[500px] w-full h-[72px] flex bg-dark-black cursor-pointer hover:bg-light-black relative group">
      <AvatarSection avatarUrl={avatarUrl} name={name} />
      <div className="w-[420px] pr-4 flex flex-col justify-center relative">
        <ChatItemHeader name={name} lastInteraction={lastInteraction} />
        <div className="flex mt-1 items-center justify-between">
          <ChatItemMessage isRead={isRead} isGroup={isGroup} isMuted={isMuted} message={message} groupMessager={groupMessager} />
          <ChatItemOptions />
        </div>
        <span className="w-full h-[1px] absolute bottom-0 bg-light-black"></span>
      </div>
    </div>
  )
}

export default ChatListItem
