'use client';
import { Member } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { User, Crown, Star, Building2, Calendar, ChevronsDown, ChevronsUp, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

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

const roleColors: Record<Member['role'], string> = {
    Coordinator: "bg-amber-500/10 text-amber-500 border-amber-500/20 hover:bg-amber-500/20",
    Lead: "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20",
    Member: "bg-slate-500/10 text-slate-400 border-slate-500/20 hover:bg-slate-500/20"
}

export default function MemberCard({ member, isExpanded, onToggle }: MemberCardProps) {
  const RoleIcon = roleIcons[member.role] || User;
  const hasChildren = member.children && member.children.length > 0;
  const isLead = member.children && member.children.length > 0;

  return (
    <div
      className={cn(
        'group flex flex-col items-center w-64 p-4 rounded-xl border bg-card text-card-foreground shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_5px_#fde0d5]',
        'hover:bg-gradient-to-r hover:from-[#a09489] hover:to-[#c3b9b1]',
        {
          'shadow-[0_0_20px_5px_#fde0d5] bg-gradient-to-r from-[#a09489] to-[#c3b9b1]': isExpanded,
        }
      )}
    >
      <div className="relative h-40 w-40 rounded-lg overflow-hidden border-2 border-transparent group-hover:border-white/50 transition-all duration-300">
          <Image 
              src={member.imageUrl} 
              alt={member.name} 
              width={160}
              height={160}
              className="object-cover"
              data-ai-hint="person portrait" 
          />
      </div>
      <div className="text-center mt-4">
        <p className={cn(
          "font-semibold text-lg text-foreground group-hover:text-black truncate",
          { 'text-black': isExpanded }
        )}>
          {member.name}
        </p>
        <div className={cn(
          "text-sm text-muted-foreground group-hover:text-black/80 mt-3 flex flex-col items-center gap-1.5",
          { 'text-black/80': isExpanded }
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
