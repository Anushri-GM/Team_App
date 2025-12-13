'use client';

import React, { useState } from 'react';
import { Member } from '@/lib/data';
import MemberCard from './MemberCard';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

type OrgNodeProps = {
  member: Member;
};

export default function OrgNode({ member }: OrgNodeProps) {
  const hasChildren = member.children && member.children.length > 0;
  // Expand Coordinator and Leads by default
  const [isExpanded, setIsExpanded] = useState(member.role !== 'Member');

  return (
    <Collapsible open={isExpanded} onOpenChange={setIsExpanded} disabled={!hasChildren}>
      <CollapsibleTrigger asChild className={cn(hasChildren ? 'cursor-pointer' : 'cursor-default', 'w-full')}>
        <div className="w-full">
            <MemberCard member={member} isExpanded={isExpanded} isCollapsible={hasChildren} />
        </div>
      </CollapsibleTrigger>

      {hasChildren && (
        <CollapsibleContent>
          <div className="relative pl-12 pt-4 space-y-4 
                          before:content-[''] before:absolute before:left-[22px] before:top-0 before:h-full before:w-px before:bg-border/80">
            {member.children?.map((child) => (
              <div key={child.id} className="relative before:content-[''] before:absolute before:left-[-26px] before:top-[2.1rem] before:h-px before:w-6 before:bg-border/80">
                <OrgNode member={child} />
              </div>
            ))}
          </div>
        </CollapsibleContent>
      )}
    </Collapsible>
  );
}
