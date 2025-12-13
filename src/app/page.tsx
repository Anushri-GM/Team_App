'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import OrgNode from '@/components/org-chart/OrgNode';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Organization Chart</CardTitle>
                <CardDescription>
                  A visual representation of the company's hierarchy.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 -mt-4">
                <div className="overflow-x-auto">
                    <div className="min-w-[1200px] py-4">
                        <OrgNode 
                            member={orgChartData} 
                            isRoot 
                            expandedLeadId={expandedLeadId}
                            onToggle={handleToggle}
                            showChildren={false}
                        />
                        {expandedLead && expandedLead.children && (
                             <div className="flex flex-col items-center mt-8">
                                <div className="h-8 w-px bg-border/80" />
                                <div className="flex justify-center gap-4 relative flex-wrap">
                                    <div className="absolute top-0 h-px w-full bg-border/80" />
                                    {expandedLead.children.map((child: Member) => (
                                        <div key={child.id} className="flex flex-col items-center relative px-2 pt-8">
                                            <div className="absolute top-0 h-8 w-px bg-border/80" />
                                            <OrgNode member={child} />
                                        </div>
                                    ))}
                                </div>
                             </div>
                        )}
                    </div>
                </div>
              </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
}
