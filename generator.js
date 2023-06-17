const generateQuestion = async (apiKey, theme, lang) => {
  const url = "https://api.openai.com/v1/completions";
  const temp = `Please provide a trivia question on the topic of ${theme} in ${lang} language with a definitive answer and three incorrect answers in the following JSON format: 

{
    "question": "question",
    "correctAnswer": "correct answer",
    "incorrectAnswers": [
        "wrong answer 1",
        "wrong answer 2",
        "wrong answer 3"
    ]
}`;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: temp,
      max_tokens: 200,
    }),
  };

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    const generatedText = data.choices[0].text.trim();
    const generatedJSON = JSON.parse(generatedText);
    
    return generatedJSON;
    
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  generateQuestion,
};
