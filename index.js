const apiKey = "your-api-key";

const express = require('express');
const app = express();
const port = 3000;

const generator = require('./generator')

app.use(express.json())

app.get('/', (req, res) => {
  res.send("ulamisty's aiquiz");
});

app.post('/quiz', async (req, res) => {
    
    const requestBody = req.body;

    let quiz = await generator.generateQuestion(apiKey,requestBody.theme);
    

    res.send(quiz);
    
  })

app.listen(port, () => {
  console.log(`aiquiz api listening at http://localhost:${port}`);
});
