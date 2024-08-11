import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { AvatarSectionProps } from '@/interfaces'

const AvatarSection = ({ avatarUrl, name }: AvatarSectionProps) => (
  <div className="flex items-center px-4">
    <Avatar>
      <AvatarImage src={avatarUrl} alt="Profile Picture" />
      <AvatarFallback>{name[0] || '?'}</AvatarFallback>
    </Avatar>
  </div>
)

export default AvatarSection
