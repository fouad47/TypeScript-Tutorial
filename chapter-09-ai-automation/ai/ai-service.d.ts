/**
 * Chapter 9: AI Automation module
 *
 * Creating strongly-typed interfaces to talk to external APIs (like OpenAI).
 */
export interface AIChatMessage {
    role: "system" | "user" | "assistant";
    content: string;
}
export interface AIResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: Array<{
        message: AIChatMessage;
        finish_reason: string;
        index: number;
    }>;
}
/**
 * A mock service simulating an AI API client.
 */
export declare class MockAIService {
    private apiKey;
    constructor(apiKey: string);
    /**
     * Simulates sending a prompt to an AI and getting a summarized response.
     * We promise to return our strict `AIResponse` type.
     */
    getSummary(text: string): Promise<AIResponse>;
}
//# sourceMappingURL=ai-service.d.ts.map