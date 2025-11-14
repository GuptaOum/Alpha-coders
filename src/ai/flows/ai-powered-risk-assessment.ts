// This file is an AI-powered risk assessment flow that detects anomalous data patterns to predict disease outbreaks.

'use server';

/**
 * @fileOverview AI-powered risk assessment flow for early disease outbreak detection.
 *
 * - aiPoweredRiskAssessment - A function that analyzes data and predicts outbreak risk levels.
 * - AIPoweredRiskAssessmentInput - The input type for the aiPoweredRiskAssessment function.
 * - AIPoweredRiskAssessmentOutput - The return type for the aiPoweredRiskAssessment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIPoweredRiskAssessmentInputSchema = z.object({
  hospitalData: z
    .string()
    .describe('Data from hospitals, preferably in CSV format.'),
  pharmacyData: z
    .string()
    .describe('Data from pharmacies, preferably in CSV format.'),
  weatherData: z.string().describe('Data from weather APIs.'),
  socialMediaData: z.string().describe('Data from social media (e.g., Google Trends or Twitter API).'),
  threshold: z.number().describe('The threshold for outbreak probability to trigger an alert.'),
});
export type AIPoweredRiskAssessmentInput = z.infer<typeof AIPoweredRiskAssessmentInputSchema>;

const AIPoweredRiskAssessmentOutputSchema = z.object({
  riskLevel: z.string().describe('The predicted risk level of a disease outbreak (e.g., low, medium, high).'),
  anomalousPatterns: z.string().describe('Description of any anomalous patterns detected in the data.'),
  probability: z
    .number()
    .describe('The probability of a disease outbreak occurring (0-1).'),
  summary: z.string().describe('A summary of the outbreak data and generated insights.'),
});
export type AIPoweredRiskAssessmentOutput = z.infer<typeof AIPoweredRiskAssessmentOutputSchema>;

export async function aiPoweredRiskAssessment(
  input: AIPoweredRiskAssessmentInput
): Promise<AIPoweredRiskAssessmentOutput> {
  return aiPoweredRiskAssessmentFlow(input);
}

const riskAssessmentPrompt = ai.definePrompt({
  name: 'riskAssessmentPrompt',
  input: {schema: AIPoweredRiskAssessmentInputSchema},
  output: {schema: AIPoweredRiskAssessmentOutputSchema},
  prompt: `You are an AI expert in analyzing health data to predict disease outbreaks.

  Analyze the provided data from various sources to identify anomalous patterns and predict the risk level of a disease outbreak.

  Data Sources:
  - Hospital Data: {{{hospitalData}}}
  - Pharmacy Data: {{{pharmacyData}}}
  - Weather Data: {{{weatherData}}}
  - Social Media Data: {{{socialMediaData}}}

  Determine the risk level (low, medium, high), describe any anomalous patterns detected, and provide the probability of an outbreak occurring (0-1).
  Also, generate a summary of the outbreak data and insights using the Gemini tool.

  Consider the defined threshold: {{threshold}}

  Output:
  Risk Level: 
  Anomalous Patterns: 
  Probability: 
  Summary:`,
});

const aiPoweredRiskAssessmentFlow = ai.defineFlow(
  {
    name: 'aiPoweredRiskAssessmentFlow',
    inputSchema: AIPoweredRiskAssessmentInputSchema,
    outputSchema: AIPoweredRiskAssessmentOutputSchema,
  },
  async input => {
    const {output} = await riskAssessmentPrompt(input);
    return output!;
  }
);
