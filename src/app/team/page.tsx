import { useMemo } from 'react';
import Header from '@/components/Header';
import MemberCard from '@/components/org-chart/MemberCard';
import { orgChartData, Member } from '@/lib/data';

const collegeYearOrder: Record<Member['collegeYear'], number> = { 'I': 1, 'II': 2, 'III': 3, 'IV': 4, 'Graduate': 5 };

const getAllMembers = (member: Member): Member[] => {
  let members = [member];
  if (member.children) {
    member.children.forEach(child => {
      members = [...members, ...getAllMembers(child)];
    });
  }
  return members;
};

const collegeYearHeadings: Record<Member['collegeYear'], string> = {
  'Graduate': 'Graduate',
  'IV': 'IV Year',
  'III': 'III Year',
  'II': 'II Year',
  'I': 'I Year',
};

export default function TeamPage() {
  const allMembers = useMemo(() => {
    const members = getAllMembers(orgChartData);
    return members.sort((a, b) => {
        return (collegeYearOrder[b.collegeYear] || 0) - (collegeYearOrder[a.collegeYear] || 0);
    });
  }, []);

  const membersByYear = useMemo(() => {
    const grouped: Record<string, Member[]> = {
      'Graduate': [],
      'IV': [],
      'III': [],
      'II': [],
      'I': [],
    };

    allMembers.forEach(member => {
      if (grouped[member.collegeYear]) {
        grouped[member.collegeYear].push(member);
      }
    });

    return Object.fromEntries(
        Object.entries(grouped).filter(([, members]) => members.length > 0)
    );
  }, [allMembers]);

  const sortedYears = useMemo(() => {
    return Object.keys(membersByYear).sort((a, b) =>
      (collegeYearOrder[b as Member['collegeYear']] || 0) - (collegeYearOrder[a as Member['collegeYear']] || 0)
    );
  }, [membersByYear]);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-[#f2f2f2]">Our Team</h1>
                <p className="text-muted-foreground">Everyone on the team, sorted by their college year.</p>
            </div>
            <div className="space-y-12">
              {sortedYears.map(year => (
                <div key={year}>
                  <h2 className="text-2xl font-bold text-[#f2f2f2] text-center mb-6">
                    {collegeYearHeadings[year as Member['collegeYear']]}
                  </h2>
                  <div className="flex justify-center flex-wrap gap-8">
                    {membersByYear[year].map(member => (
                      <MemberCard key={member.id} member={member} isExpanded={false} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
        </div>
      </main>
    </div>
  );
}
