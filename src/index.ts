import {
  Message,
  PayloadChatCompletion,
  ChatGPTModel,
  MessageResponse,
  PayloadFunction,
  ImageGenerationResponse,
} from "./type";

const apiUrlPrefix = "https://api.openai.com/v1";

export const getChatCompletion = async (
  {
    messages,
    functions,
    model = "gpt-3.5-turbo",
  }: {
    messages: Message[];
    functions?: PayloadFunction[];
    model?: ChatGPTModel;
  },
  openApiKey: string
): Promise<{ choices: { message: MessageResponse }[] }> => {
  const data: PayloadChatCompletion = {
    model,
    messages,
    functions,
  };

  const headers = {
    "content-type": "application/json",
    Authorization: "Bearer " + openApiKey,
  };

  const body = JSON.stringify(data);
  const method = "POST";

  const response = await fetch(apiUrlPrefix + "/chat/completions", {
    method,
    headers,
    body,
  });

  if (response.status !== 200) {
    const t = await response.text();
    throw Error(`status: ${response.status}, ${t}`);
  }

  return response.json();
};

//https://platform.openai.com/docs/api-reference/images/create
export const generateImage = async (
  {
    prompt,
    model = "dall-e-3",
    n = 1,
    size = "1024x1024",
    quality = "standard",
    response_format = "string",
    style = "vivid",
  }: {
    prompt: string;
    model?: "dall-e-2" | "dall-e-3";
    n?: number;
    size?: "1024x1024" | "1792x1024" | "1024x1792";
    quality?: "standard" | "hd";
    response_format?: "string" | "b64_json";
    style?: "vivid" | "natural";
  },
  openApiKey: string
): Promise<ImageGenerationResponse> => {
  const url = apiUrlPrefix + "/images/generations";

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + openApiKey,
  };

  const data = {
    model,
    prompt,
    n,
    size,
    quality,
  };

  const response = await fetch(url, {
    headers,
    body: JSON.stringify(data),
    method: "POST",
  });

  if (response.status !== 200) {
    const t = await response.text();
    throw Error(`status: ${response.status}, ${t}`);
  }

  return response.json();
};
