const generateQuestion = async (apiKey, theme) => {
  const url = "https://api.openai.com/v1/completions";
  const temp = `Create a trivia question on the topic ${theme} with a definitive answer, providing the correct answer and three incorrect answers in JSON format: { "question": "//question", "answer": "//correct answer", "wrongAnswer1": "//wrong answer", "wrongAnswer2": "//wrong answer", "wrongAnswer3": "//wrong answer" }`;

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
