// https://platform.openai.com/docs/models/model-endpoint-compatibility
export type ChatGPTModel =
  | "gpt-4"
  | "gpt-4-0613"
  | "gpt-4-32k"
  | "gpt-4-32k-0613"
  | "gpt-3.5-turbo"
  | "gpt-3.5-turbo-0613"
  | "gpt-3.5-turbo-16k"
  | "gpt-3.5-turbo-16k-0613"; // "gpt-3.5-turbo" | "gpt-4";

export interface OpenAIResponseChoice {
  text: string;
  index: 0;
  logprobs: {
    tokens: string[];
    token_logprobs: number[];
    top_logprobs: null;
    text_offset: number[];
  };
  finish_reason: string;
}

export interface OpenAIResponse {
  id: string;
  object: "text_completion";
  created: number;
  model: ChatGPTModel;
  choices: OpenAIResponseChoice[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// ref: https://platform.openai.com/docs/api-reference/completions/create#completions/create-model
export interface Payload {
  model: ChatGPTModel;
  prompt: string;
  max_tokens: number;
  temperature: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  best_of: number;
  echo: boolean;
  logprobs: number;
}

export type Role = "user" | "system" | "assistant";
export interface Message {
  role: Role;
  content: string;
}

export interface MessageResponse {
  role: Role;
  content: string | null;
  function_call?: { name: string; arguments: string };
}

export type JSONSchema = any;
export interface Function {
  name: string;
  description?: string;
  parameters: JSONSchema;
}
