'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import OrgNode from '@/components/org-chart/OrgNode';
import { orgChartData, Member } from '@/lib/data';

export default function Home() {
  const [expandedLeadId, setExpandedLeadId] = useState<string | null>(null);

  const handleToggle = (leadId: string) => {
    setExpandedLeadId(prevId => (prevId === leadId ? null : leadId));
  };
  
  const expandedLead = orgChartData.children?.find(child => child.id === expandedLeadId);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-foreground">Organization Chart</h1>
                <p className="text-muted-foreground">A visual representation of the company's hierarchy.</p>
            </div>
            <div className="overflow-x-auto">
                <div className="min-w-[1200px] py-4">
                    <OrgNode 
                        member={orgChartData} 
                        isRoot 
                    />
                    
                    <div className="flex flex-col items-center mt-8">
                        <div className="h-8 w-px bg-border/50" />
                        <div className="flex justify-center gap-4 relative flex-wrap">
                            <div className="absolute top-0 h-px w-full bg-border/50" />
                            {orgChartData.children?.map((lead: Member) => (
                                <div key={lead.id} className="flex flex-col items-center relative px-2 pt-8">
                                    <div className="absolute top-0 h-8 w-px bg-border/50" />
                                    <OrgNode 
                                        member={lead}
                                        onToggle={handleToggle}
                                        expandedLeadId={expandedLeadId}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {expandedLead && expandedLead.children && (
                         <div className="flex flex-col items-center mt-8">
                            <div className="h-8 w-px bg-border/50" />
                            <div className="flex justify-center gap-4 relative flex-wrap">
                                <div className="absolute top-0 h-px w-full bg-border/50" />
                                {expandedLead.children.map((child: Member) => (
                                    <div key={child.id} className="flex flex-col items-center relative px-2 pt-8">
                                        <div className="absolute top-0 h-8 w-px bg-border/50" />
                                        <OrgNode member={child} />
                                    </div>
                                ))}
                            </div>
                         </div>
                    )}
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
