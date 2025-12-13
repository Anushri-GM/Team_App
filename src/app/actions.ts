'use server';

import { suggestReorg, SuggestReorgInput, SuggestReorgOutput } from '@/ai/flows/suggest-reorg';

type ActionResult = {
  data?: SuggestReorgOutput;
  error?: string;
};

export async function getAiSuggestion(input: SuggestReorgInput): Promise<ActionResult> {
    try {
        const result = await suggestReorg(input);
        
        // Defensive check to ensure the output is valid JSON, as LLMs can sometimes fail to adhere to formats.
        try {
            JSON.parse(result.suggestedReorg);
        } catch (e) {
            return { error: 'The AI returned a suggestion in an invalid format. Please try again with a different prompt.' };
        }

        return { data: result };
    } catch (error) {
        console.error('Error getting AI suggestion:', error);
        const message = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { error: `Failed to get suggestion from AI. ${message}` };
    }
}
