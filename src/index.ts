import { Message, Payload, OpenAiModel } from "./type";

const apiUrlPrefix = "https://api.openai.com/v1";

export const getChatCompletion = async (
  messages: Message[],
  model: OpenAiModel = "gpt-3.5-turbo", 
  openApiKey: string
): Promise<{ choices: { message: Message }[] }> => {
  const headers = {
    "content-type": "application/json",
    Authorization: "Bearer " + openApiKey,
  };
  
  const data:Payload = {
    model,
    messages,
  };

  const body = JSON.stringify(data);
  const method = "POST";

  const r = await fetch(apiUrlPrefix + "/chat/completions", {
    method,
    headers,
    body,
  });

  if (r.status !== 200) {
    const t = await r.text();
    throw Error(`status: ${r.status}, ${t}`);
  }

  return r.json();
};
