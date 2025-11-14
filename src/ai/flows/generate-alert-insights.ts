'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate insights for alerts using the Gemini model.
 *
 * It includes:
 * - generateAlertInsights: The main function to trigger alert insights generation.
 * - GenerateAlertInsightsInput: The input type definition for the function.
 * - GenerateAlertInsightsOutput: The output type definition for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAlertInsightsInputSchema = z.object({
  alertDetails: z.string().describe('Detailed information about the alert.'),
});
export type GenerateAlertInsightsInput = z.infer<
  typeof GenerateAlertInsightsInputSchema
>;

const GenerateAlertInsightsOutputSchema = z.object({
  insights: z.string().describe('Generated insights and context for the alert.'),
});
export type GenerateAlertInsightsOutput = z.infer<
  typeof GenerateAlertInsightsOutputSchema
>;

export async function generateAlertInsights(
  input: GenerateAlertInsightsInput
): Promise<GenerateAlertInsightsOutput> {
  return generateAlertInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAlertInsightsPrompt',
  input: {schema: GenerateAlertInsightsInputSchema},
  output: {schema: GenerateAlertInsightsOutputSchema},
  prompt: `You are an AI assistant that provides insights for disease outbreak alerts.
  Based on the alert details provided, generate a concise summary of the situation,
  explain why the alert was triggered, and suggest potential actions to take.

  Alert Details: {{{alertDetails}}}
  `,
});

const generateAlertInsightsFlow = ai.defineFlow(
  {
    name: 'generateAlertInsightsFlow',
    inputSchema: GenerateAlertInsightsInputSchema,
    outputSchema: GenerateAlertInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
