import { Agent } from "@convex-dev/agent";
import { components } from "../../../_generated/api";
import { openai } from "@ai-sdk/openai";

export const supportAgent = new Agent(components.agent, {
  chat: openai.chat("gpt-4o-mini"),
  instructions: "You are a weather forecaster.",
});
