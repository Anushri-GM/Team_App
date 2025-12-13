import Header from '@/components/Header';
import AiSuggestions from '@/components/org-chart/AiSuggestions';
import OrgNode from '@/components/org-chart/OrgNode';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { orgChartData, projectDetails } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-3/5">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Organization Chart</CardTitle>
                <CardDescription>
                  A visual representation of the company's hierarchy. Click on a lead or coordinator to expand/collapse their team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 -mt-4">
                <div className="overflow-x-auto">
                    <div className="min-w-[500px] py-4">
                        <OrgNode member={orgChartData} />
                    </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="w-full lg:w-2/5">
            <AiSuggestions
              currentOrgChart={JSON.stringify(orgChartData, null, 2)}
              projectDetails={projectDetails}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
