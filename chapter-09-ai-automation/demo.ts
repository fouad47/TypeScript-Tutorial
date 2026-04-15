/**
 * Chapter 9: AI Automation Demo driver
 */

import { MockAIService } from "./ai/ai-service";

// We execute an async function to utilize Promises
async function runDemo() {
    console.log("Starting AI Automation Demo...");

    // Normally read from process.env.OPENAI_API_KEY
    const aiService = new MockAIService("sk-abc123mockkey");
    
    try {
        const textToSummarize = "TypeScript provides powerful typing over standard JavaScript, allowing for more robust compilation checks and safer execution.";
        
        // Hovering over 'response' in VS Code will show it has type 'AIResponse'
        const response = await aiService.getSummary(textToSummarize);
        
        // We get auto-completion for response.choices[0].message.content
        console.log("\n--- AI Result ---");
        console.log(response.choices[0]?.message.content);
        console.log("-----------------");

    } catch (e) {
        console.error("AI execution failed:", e);
    }
}

runDemo();

// -------------------------------------------------------------
// JAVASCRIPT COMPARISON
// -------------------------------------------------------------
/*
In JS:
const response = await aiService.getSummary(text);
// You have NO IDEA what 'response' looks like! 
// You might guess it's response.data.choices[0].text or something. 
// TypeScript's interfaces prevent guessing.
*/
