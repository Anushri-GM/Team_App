import React from 'react';
import { Member } from '@/lib/data';
import MemberCard from './MemberCard';

type OrgNodeProps = {
  member: Member;
  isRoot?: boolean;
  expandedLeadId?: string | null;
  onToggle?: (id: string) => void;
  showChildren?: boolean;
};

export default function OrgNode({ member, isRoot = false, expandedLeadId, onToggle, showChildren = true }: OrgNodeProps) {
  const isExpanded = expandedLeadId === member.id;
  
  if (isRoot) {
    return (
      <div className="flex flex-col items-center">
        <OrgNode member={member} isRoot={false} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        <MemberCard member={member} isExpanded={isExpanded} onToggle={onToggle} />
      </div>
    </div>
  );
}
