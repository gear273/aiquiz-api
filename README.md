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
  "theme": "topic",
  "lang": "language"
}
```

The API returns the generated question in JSON format:

```json
{
  "question": "question",
  "correctAnswer": "correct answer",
  "incorrectAnswers": [
    "wrong answer 1",
    "wrong answer 2",
    "wrong answer 3"
  ]
}
```

To use the API hosted on Vercel, you can make a POST request to the following URL:

```
https://aiquiz-api.vercel.app/quiz
```

## Plan of Development

### v0.1.0
- [x] Generate one question and four answers for a given topic

### v1.0.0 (current)
- [x] Modernize req and res
- [x] Add language choice
- [ ] ~~Add more than one question generation~~

### v2.0.0
- [ ] Image generation
- [ ] Add number of answers choice
- [ ] Add multiple-choice
- [ ] Other features
