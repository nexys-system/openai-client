export type OpenAiModel = "text-davinci-003" | "gpt-3.5-turbo" | "gpt-4";

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
  model: OpenAiModel;
  choices: OpenAIResponseChoice[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// ref: https://platform.openai.com/docs/api-reference/completions/create#completions/create-model
export interface Payload {
  model: OpenAiModel;
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

export type Role = 'user' | 'system' | 'assistant';
export interface Message {role:Role, content:string};

export type PayloadFunctionType = 'string' | 'object';

export interface PayloadFunction {
    name: string;
    description: string;
    parameters: {
        type: PayloadFunctionType,
        properties: {
            location: {
                type: PayloadFunctionType,
                description: string,
            },
            unit: {type: PayloadFunctionType, enum?: string[]},
        },
        required: string[],
    },
}

export interface Payload {
  model: OpenAiModel,
  messages: Message[],
  functions?: PayloadFunction[]
  function_call?: "auto",
};
