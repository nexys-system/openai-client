import { Message, PayloadChatCompletion, ChatGPTModel } from "./type";

const apiUrlPrefix = "https://api.openai.com/v1";


export const getChatCompletion = async ({
  messages,
  functions,
  model = "gpt-3.5-turbo",
}: {
  messages: Message[];
  functions?: Function[];
  model?: ChatGPTModel;
}, openApiKey: string): Promise<{ choices: { message: MessageResponse }[] }> =>  {
  const data:PayloadChatCompletion = {
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
