// SummarizeOutbreakData flow
'use server';
/**
 * @fileOverview A Genkit flow for summarizing key findings from collected outbreak data using GenAI.
 *
 * - summarizeOutbreakData - A function that takes outbreak data as input and returns a summary of key findings.
 * - SummarizeOutbreakDataInput - The input type for the summarizeOutbreakData function.
 * - SummarizeOutbreakDataOutput - The return type for the summarizeOutbreakData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeOutbreakDataInputSchema = z.object({
  data: z.string().describe('The collected outbreak data to summarize.'),
});
export type SummarizeOutbreakDataInput = z.infer<typeof SummarizeOutbreakDataInputSchema>;

const SummarizeOutbreakDataOutputSchema = z.object({
  summary: z.string().describe('A summary of the key findings from the outbreak data.'),
});
export type SummarizeOutbreakDataOutput = z.infer<typeof SummarizeOutbreakDataOutputSchema>;

export async function summarizeOutbreakData(input: SummarizeOutbreakDataInput): Promise<SummarizeOutbreakDataOutput> {
  return summarizeOutbreakDataFlow(input);
}

const summarizeOutbreakDataPrompt = ai.definePrompt({
  name: 'summarizeOutbreakDataPrompt',
  input: {schema: SummarizeOutbreakDataInputSchema},
  output: {schema: SummarizeOutbreakDataOutputSchema},
  prompt: `You are an expert in analyzing disease outbreak data. Please provide a concise summary of the key findings from the following data:\n\n{{{data}}}`,
});

const summarizeOutbreakDataFlow = ai.defineFlow(
  {
    name: 'summarizeOutbreakDataFlow',
    inputSchema: SummarizeOutbreakDataInputSchema,
    outputSchema: SummarizeOutbreakDataOutputSchema,
  },
  async input => {
    const {output} = await summarizeOutbreakDataPrompt(input);
    return output!;
  }
);
