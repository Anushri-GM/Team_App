'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { getAiSuggestion } from '@/app/actions';
import type { SuggestReorgOutput } from '@/ai/flows/suggest-reorg';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Wand2 } from 'lucide-react';

const formSchema = z.object({
  desiredOutcomes: z.string().min(15, 'Please describe your desired outcomes in at least 15 characters.').max(500),
});

type AiSuggestionsProps = {
  currentOrgChart: string;
  projectDetails: string;
};

export default function AiSuggestions({ currentOrgChart, projectDetails }: AiSuggestionsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<SuggestReorgOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { desiredOutcomes: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestion(null);

    const result = await getAiSuggestion({
      currentOrgChart,
      projectDetails,
      desiredOutcomes: values.desiredOutcomes,
    });

    if (result.error) {
      toast({
        variant: 'destructive',
        title: 'Suggestion Failed',
        description: result.error,
      });
    } else if (result.data) {
      setSuggestion(result.data);
    }
    
    setIsLoading(false);
  }

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="text-primary" />
          AI Re-Org Suggestions
        </CardTitle>
        <CardDescription>
          Get AI-powered recommendations to optimize your team structure based on skills and project experience.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="desiredOutcomes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What are your desired outcomes?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'Improve cross-functional collaboration and accelerate product delivery for mobile projects.'"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-4 w-4" />
              )}
              Generate Suggestion
            </Button>
          </form>
        </Form>

        {suggestion && (
          <div className="mt-8 space-y-6 animate-in fade-in-50">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Rationale</h4>
              <p className="text-sm text-muted-foreground">{suggestion.rationale}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Suggested Org Chart (JSON)</h4>
              <pre className="bg-muted p-4 rounded-md text-xs overflow-x-auto text-muted-foreground">
                <code>{suggestion.suggestedReorg}</code>
              </pre>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
