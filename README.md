# OpenAI Client

[![Build and Test Package](https://github.com/nexys-system/openai-client/actions/workflows/test.yml/badge.svg)](https://github.com/nexys-system/openai-client/actions/workflows/test.yml)
[![Publish](https://github.com/nexys-system/openai-client/actions/workflows/publish.yml/badge.svg)](https://github.com/nexys-system/openai-client/actions/workflows/publish.yml)
[![NPM package](https://badge.fury.io/js/%40nexys%2Fopenai-client.svg)](https://www.npmjs.com/package/@nexys/openai-client)
[![NPM package](https://img.shields.io/npm/v/@nexys/openai-client.svg)](https://www.npmjs.com/package/@nexys/openai-client)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

## Introduction

The `@nexys/openai-client` is a simple and efficient TypeScript client for interacting with OpenAI's cutting-edge AI models, such as GPT-3.5 Turbo, directly from your TypeScript or JavaScript applications. This npm package wraps the OpenAI API, providing a clean and type-safe interface for sending chat requests to the API.

## Features

- Send chat completion requests to OpenAI API with just a few lines of code.
- TypeScript support for a strongly typed development experience.
- Provides simple error handling and efficient request sending.
- Supports the OpenAI's "gpt-3.5-turbo" model.

## Prerequisites

- Node.js (v18.0.0 or newer, requires `fetch`)
- An OpenAI API key

## Installation

```
npm install @nexys/openai-client
```

## Usage

First, import the client and necessary types:

```
import { getChatCompletion, Message, OpenAiModel } from '@nexys/openai-client';
```

Next, prepare your messages and call `getChatCompletion`:

```typescript
const messages: Message[] = [
  { role: 'system', content: 'You are a helpful assistant.' },
  { role: 'user', content: 'Who won the world series in 2020?' }
];

const model: OpenAiModel = "gpt-3.5-turbo";

try {
  const response = await getChatCompletion(messages, model, 'YOUR_OPENAI_API_KEY');
  console.log(response.choices[0].message.content);
} catch (err) {
  console.error(err);
}
```

## Contributing

Contributions are warmly welcomed! Refer to the [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to contribute and our [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) for the code of conduct.

## Support

If you encounter any issues, please file an issue on our [issue tracker](https://github.com/nexys-system/openai-client/issues).

## License

This project is licensed under the MIT license. See the [LICENSE](./LICENSE) file for the full license text.

## Disclaimer

This is an unofficial client library and is not officially endorsed by OpenAI. Please consult the OpenAI terms of use for more details.
