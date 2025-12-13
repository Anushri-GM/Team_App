'use client';
import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import OrgNode from '@/components/org-chart/OrgNode';
import MemberCard from '@/components/org-chart/MemberCard';
import { orgChartData, Member } from '@/lib/data';

const collegeYearOrder = { 'I': 1, 'II': 2, 'III': 3, 'IV': 4, 'Graduate': 5 };

const getAllMembers = (member: Member): Member[] => {
  let members = [member];
  if (member.children) {
    member.children.forEach(child => {
      members = [...members, ...getAllMembers(child)];
    });
  }
  return members;
};

export default function Home() {
  const [expandedLeadId, setExpandedLeadId] = useState<string | null>(null);
  const [view, setView] = useState<'chart' | 'grid'>('chart');

  const handleToggle = (leadId: string) => {
    setExpandedLeadId(prevId => (prevId === leadId ? null : leadId));
  };
  
  const expandedLead = orgChartData.children?.find(child => child.id === expandedLeadId);

  const allMembers = useMemo(() => {
    const members = getAllMembers(orgChartData);
    // Filter out the root coordinator from the grid view of all members
    return members.filter(m => m.id !== '1').sort((a, b) => {
        return (collegeYearOrder[a.collegeYear] || 99) - (collegeYearOrder[b.collegeYear] || 99);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header view={view} onViewChange={setView} />
      <main className="flex-1 container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-foreground">Meet the Team</h1>
                <p className="text-muted-foreground">Get to know the talented individuals who make up our team.</p>
            </div>

            {view === 'chart' ? (
                <div className="overflow-x-auto">
                    <div className="min-w-[1200px] py-4">
                        <OrgNode 
                            member={orgChartData} 
                            isRoot 
                        />
                        
                        <div className="flex flex-col items-center mt-8">
                            <div className="h-8 w-px bg-slate-200" />
                            <div className="text-center my-4">
                              <h2 className="text-2xl font-semibold text-foreground">Leads</h2>
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
                                  <h2 className="text-2xl font-semibold text-foreground">Development Members</h2>
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
            ) : (
                <div className="flex justify-center flex-wrap gap-8">
                    {allMembers.map(member => (
                        <MemberCard key={member.id} member={member} isExpanded={false} />
                    ))}
                </div>
            )}
        </div>
      </main>
    </div>
  );
}
