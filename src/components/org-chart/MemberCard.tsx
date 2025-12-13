import { Member } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { User, Crown, Star, Building2, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

type MemberCardProps = {
  member: Member;
  isExpanded?: boolean;
  isCollapsible: boolean;
};

const roleIcons: Record<Member['role'], React.ElementType> = {
  Coordinator: Crown,
  Lead: Star,
  Member: User,
};

const roleColors: Record<Member['role'], string> = {
    Coordinator: "bg-amber-500/10 text-amber-700 border-amber-500/20",
    Lead: "bg-blue-500/10 text-blue-700 border-blue-500/20",
    Member: "bg-gray-500/10 text-gray-700 border-gray-500/20"
}

export default function MemberCard({ member, isExpanded, isCollapsible }: MemberCardProps) {
  const RoleIcon = roleIcons[member.role] || User;

  return (
    <div
      className={cn(
        'flex flex-col items-center w-64 p-4 rounded-lg transition-colors group border bg-card text-card-foreground shadow-sm',
        isCollapsible ? 'hover:bg-accent/20 cursor-pointer' : 'cursor-default'
      )}
    >
      <Avatar className="h-16 w-16 border-2 border-primary/20">
        <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint="person portrait" />
        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div className="text-center mt-3">
        <p className="font-semibold text-lg text-foreground truncate">{member.name}</p>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <Badge className={cn("whitespace-nowrap text-xs", roleColors[member.role])}>
            <RoleIcon className="w-3.5 h-3.5 mr-1.5" />
            {member.role}
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground mt-2 flex flex-col items-center gap-1">
          <span className="flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5" />
            {member.department}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            Joined {member.year}
          </span>
        </div>
      </div>
      {isCollapsible && (
        <div className="text-muted-foreground transition-transform duration-200 group-hover:text-accent-foreground mt-3" >
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      )}
    </div>
  );
}