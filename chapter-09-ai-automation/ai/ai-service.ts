/**
 * Chapter 9: AI Automation module
 * 
 * Creating strongly-typed interfaces to talk to external APIs (like OpenAI).
 */

// 1. Defining strict types for API requests and responses.
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
export class MockAIService {
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    /**
     * Simulates sending a prompt to an AI and getting a summarized response.
     * We promise to return our strict `AIResponse` type.
     */
    public async getSummary(text: string): Promise<AIResponse> {
        console.log(`[AI SERVICE] Connecting using key: ${this.apiKey.substring(0,4)}...`);
        console.log(`[AI SERVICE] Analyzing text: "${text.substring(0, 30)}..."`);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Return mock data adhering to the AIResponse interface
        return {
            id: `chatcmpl-${Math.floor(Math.random() * 10000)}`,
            object: "chat.completion",
            created: Date.now(),
            model: "mock-gpt-4",
            choices: [
                {
                    index: 0,
                    finish_reason: "stop",
                    message: {
                        role: "assistant",
                        content: `Summary: The provided text is about ${text.split(' ').length} words long.`
                    }
                }
            ]
        };
    }
}
