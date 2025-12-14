import { Member } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { User, Crown, Star, Building2, Calendar, ChevronsDown, ChevronsUp, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

type MemberCardProps = {
  member: Member;
  isExpanded: boolean;
  onToggle?: (id: string) => void;
};

const roleIcons: Record<string, React.ElementType> = {
  Coordinator: Crown,
  Lead: Star,
  Member: User,
};

export default function MemberCard({ member, isExpanded, onToggle }: MemberCardProps) {
  const RoleIcon = roleIcons[member.role] || User;
  const hasChildren = member.children && member.children.length > 0;
  const isLead = member.children && member.children.length > 0;

  return (
    <div
      className={cn(
        'group flex flex-col items-center w-64 p-4 rounded-xl border bg-card text-card-foreground shadow-lg transition-all duration-300',
        {
          'shadow-[0_0_20px_5px_#fde0d5] bg-gradient-to-r from-[#a09489] to-[#c3b9b1] text-black': isExpanded,
        }
      )}
    >
      <div className="relative h-40 w-40 rounded-lg overflow-hidden border-2 border-transparent group-hover:border-white/50 transition-all duration-300">
          <img
              src={member.imageUrl}
              alt={member.name}
              className="object-cover w-full h-full"
              data-ai-hint="person portrait"
          />
      </div>
      <div className="text-center mt-4">
        <p className={cn(
          "font-semibold text-lg text-card-foreground truncate transition-colors duration-200",
          {'group-hover:text-black': true}
        )}>
          {member.name}
        </p>
        <div className={cn(
          "text-sm text-card-foreground transition-colors duration-200 mt-3 flex flex-col items-center gap-1.5",
          {'group-hover:text-black': true}
        )}>
           <span className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" />
            {member.role}
          </span>
          <span className="flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5" />
            {member.department} {member.collegeYear}
          </span>
        </div>
      </div>
      {isLead && hasChildren && onToggle && (
        <div className="mt-4 w-full">
            <Button
                variant="secondary"
                size="sm"
                className={cn(
                  'w-full bg-slate-200/20 text-slate-200 hover:bg-slate-200/50 hover:text-white',    
                  'group-hover:bg-black/20 group-hover:text-black group-hover:border-black/20',      
                  { 'bg-black/20 text-black border-black/20': isExpanded }
                )}
                onClick={() => onToggle(member.id)}
            >
                {isExpanded ? (
                    <>
                        <ChevronsUp className="mr-2 h-4 w-4" />
                        Hide Members
                    </>
                ) : (
                    <>
                        <ChevronsDown className="mr-2 h-4 w-4" />
                        View Members
                    </>
                )}
            </Button>
        </div>
      )}
    </div>
  );
}
