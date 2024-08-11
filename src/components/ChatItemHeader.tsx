import { ChatItemHeaderProps } from '@/interfaces'

const ChatItemHeader = ({ name, lastInteraction }: ChatItemHeaderProps) => (
  <div className="flex items-center justify-between">
    <p className="text-light-gray">{name}</p>
    <span className="text-xs text-normal-gray">{lastInteraction}</span>
  </div>
)

export default ChatItemHeader
