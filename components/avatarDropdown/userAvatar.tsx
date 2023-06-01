import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserAvatar() {
  return (
    <Avatar>
      <AvatarImage src="" alt="user" />
      <AvatarFallback delayMs={600}>ME</AvatarFallback>
    </Avatar>
  )
}
