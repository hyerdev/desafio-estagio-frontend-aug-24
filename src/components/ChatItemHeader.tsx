import { ChatItemHeaderProps } from '@/interfaces'
import { formatDate } from '@/utils/formatDate'

const ChatItemHeader = ({ name, lastInteraction }: ChatItemHeaderProps) => (
  <div className="flex items-center justify-between">
    <p className="text-light-gray">{name}</p>
    <span className="text-xs text-normal-gray">
      {formatDate(lastInteraction)}
    </span>
  </div>
)

export default ChatItemHeader
