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
  const hasChildren = member.children && member.children.length > 0;
  
  const shouldShowChildren = showChildren && ((member.role !== 'Lead' && hasChildren) || (member.role === 'Lead' && isExpanded));

  if (isRoot) {
    return (
      <div className="flex flex-col items-center">
        <OrgNode member={member} isRoot={false} expandedLeadId={expandedLeadId} onToggle={onToggle} showChildren={showChildren} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        <MemberCard member={member} isExpanded={isExpanded} onToggle={onToggle} />
      </div>

      {shouldShowChildren && (
        <>
          {/* This is the vertical line coming from the parent */}
          <div className="h-8 w-px bg-border/80 mx-auto" />
          <div className="flex justify-center gap-4 relative flex-wrap">
            {/* This is the horizontal line connecting the children */}
            <div className="absolute top-0 h-px w-full bg-border/80" />
            {member.children?.map((child) => (
              <div key={child.id} className="flex flex-col items-center relative px-2 pt-8">
                 {/* This is the vertical line going up to the horizontal connector */}
                <div className="absolute top-0 h-8 w-px bg-border/80" />
                <OrgNode member={child} expandedLeadId={expandedLeadId} onToggle={onToggle} showChildren={showChildren} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
