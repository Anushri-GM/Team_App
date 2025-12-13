import React from 'react';
import { Member } from '@/lib/data';
import MemberCard from './MemberCard';

type OrgNodeProps = {
  member: Member;
  isRoot?: boolean;
};

export default function OrgNode({ member, isRoot = false }: OrgNodeProps) {
  const hasChildren = member.children && member.children.length > 0;

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
        <MemberCard member={member} />
      </div>

      {hasChildren && (
        <>
          {/* This is the vertical line coming from the parent */}
          <div className="h-8 w-px bg-border/80 mx-auto" />
          <div className="flex justify-center gap-4 relative">
            {/* This is the horizontal line connecting the children */}
            <div className="absolute top-0 h-px w-full bg-border/80" />
            {member.children?.map((child) => (
              <div key={child.id} className="flex flex-col items-center relative px-2">
                 {/* This is the vertical line going up to the horizontal connector */}
                <div className="absolute top-0 h-8 w-px bg-border/80" />
                <OrgNode member={child} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
