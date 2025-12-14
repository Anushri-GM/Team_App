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
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-[#f2f2f2]">Meet the Team</h1>
                <p className="text-muted-foreground">Get to know the talented individuals who make up our team.</p>
            </div>

            <div className="overflow-x-auto">
                <div className="min-w-[1200px] py-4">
                    <OrgNode
                        member={orgChartData}
                        isRoot
                    />

                    <div className="flex flex-col items-center mt-8">
                        <div className="h-8 w-px bg-slate-200" />
                        <div className="text-center my-4">
                          <h2 className="text-2xl font-semibold text-[#f2f2f2]">Leads</h2>
                        </div>
                        <div className="flex justify-center gap-4 relative flex-wrap">
                            <div className="absolute top-0 h-px w-full bg-slate-200" />
                            {orgChartData.children?.map((lead: Member) => (
                                <div key={lead.id} className="flex flex-col items-center relative px-2 pt-8">
                                    <div className="absolute top-0 h-8 w-px bg-slate-200" />
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
                            <div className="h-8 w-px bg-slate-200" />
                            <div className="text-center my-4">
                              <h2 className="text-2xl font-semibold text-[#f2f2f2]">Development Members</h2>
                            </div>
                            <div className="flex justify-center gap-4 relative flex-wrap">
                                <div className="absolute top-0 h-px w-full bg-slate-200" />
                                {expandedLead.children.map((child: Member) => (
                                    <div key={child.id} className="flex flex-col items-center relative px-2 pt-8">
                                        <div className="absolute top-0 h-8 w-px bg-slate-200" />
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
