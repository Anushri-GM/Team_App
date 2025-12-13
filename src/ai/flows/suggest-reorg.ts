'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting organizational chart reorganizations based on member skills and project experience.
 *
 * - suggestReorg - A function that triggers the reorg suggestion flow.
 * - SuggestReorgInput - The input type for the suggestReorg function.
 * - SuggestReorgOutput - The return type for the suggestReorg function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestReorgInputSchema = z.object({
  currentOrgChart: z
    .string()
    .describe('A JSON string representing the current organization chart.'),
  projectDetails: z
    .string()
    .describe(
      'A JSON string containing details of past and current projects, including team members and skills used.'
    ),
  desiredOutcomes: z
    .string()
    .describe(
      'A description of the desired outcomes from the reorganization, such as improved efficiency or innovation.'
    ),
});
export type SuggestReorgInput = z.infer<typeof SuggestReorgInputSchema>;

const SuggestReorgOutputSchema = z.object({
  suggestedReorg: z
    .string()
    .describe(
      'A JSON string representing the suggested reorganization of the org chart, including team structures and member assignments.'
    ),
  rationale: z
    .string()
    .describe(
      'A detailed explanation of why the suggested reorganization is beneficial, based on skills, project experience, and desired outcomes.'
    ),
});
export type SuggestReorgOutput = z.infer<typeof SuggestReorgOutputSchema>;

export async function suggestReorg(input: SuggestReorgInput): Promise<SuggestReorgOutput> {
  return suggestReorgFlow(input);
}

const suggestReorgPrompt = ai.definePrompt({
  name: 'suggestReorgPrompt',
  input: {schema: SuggestReorgInputSchema},
  output: {schema: SuggestReorgOutputSchema},
  prompt: `You are an AI organizational consultant tasked with suggesting reorganizations of a company's org chart.

  Based on the current org chart, project details, and desired outcomes, suggest an optimal reorganization.

  Current Org Chart:
  {{currentOrgChart}}

  Project Details:
  {{projectDetails}}

  Desired Outcomes:
  {{desiredOutcomes}}

  Provide a JSON string for the suggestedReorg field, which includes team structures and member assignments, and a detailed rationale for the suggested changes, explaining the benefits in terms of skills, project experience, and achieving the desired outcomes.
  Ensure that the suggestedReorg field is a valid JSON string.
  `,
});

const suggestReorgFlow = ai.defineFlow(
  {
    name: 'suggestReorgFlow',
    inputSchema: SuggestReorgInputSchema,
    outputSchema: SuggestReorgOutputSchema,
  },
  async input => {
    const {output} = await suggestReorgPrompt(input);
    return output!;
  }
);
