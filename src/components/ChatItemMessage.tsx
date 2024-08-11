import { ChatMessageProps } from '@/interfaces'
import { Muted, Read } from './icons'

const ChatItemMessage = ({
  isGroup,
  isMuted,
  isRead,
  message,
  groupMessager,
}: ChatMessageProps) => (
  <div className="text-sm flex gap-1">
    {!isGroup && <Read color={isRead ? '#53BDEB' : '#8696A0'} />}
    <div>
      <p className="text-normal-gray line-clamp-1">
        {groupMessager && `${groupMessager}: `} {message}
      </p>
    </div>
    <p>{isMuted && <Muted />}</p>
  </div>
)

export default ChatItemMessage
