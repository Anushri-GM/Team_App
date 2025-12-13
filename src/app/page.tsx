import Header from '@/components/Header';
import OrgNode from '@/components/org-chart/OrgNode';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { orgChartData } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Organization Chart</CardTitle>
                <CardDescription>
                  A visual representation of the company's hierarchy. Click on a lead or coordinator to expand/collapse their team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 -mt-4">
                <div className="overflow-x-auto">
                    <div className="min-w-[800px] py-4">
                        <OrgNode member={orgChartData} isRoot />
                    </div>
                </div>
              </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
}