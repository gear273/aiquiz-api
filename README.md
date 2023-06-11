# AIquiz API

AIquiz API is an API for generating quiz questions based on machine learning. It uses OpenAI GPT-3 to generate questions based on a given topic.

## Installation and Setup

1. Clone the repository:

```
git clone https://github.com/ulemisty/aiquiz-api.git
```

2. Install dependencies:

```
npm install
```

3. Set up your OpenAI API key by replacing `apiKey` in the `index.js` file:

```js
const apiKey = "your-api-key";
```

4. Start the server:

```
npm start
```

The server will run on port 3000.

## Usage

The API has a single route `/quiz` that accepts POST requests with a JSON body:

```json
{
  "theme": "topic"
}
```

The API returns the generated question in JSON format:

```json
{
  "question": "question",
  "answer": "correct answer",
  "wrongAnswer1": "wrong answer",
  "wrongAnswer2": "wrong answer",
  "wrongAnswer3": "wrong answer"
}
```