const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your location?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Tell us about yourself:',
      name: 'bio',
    },
    {
        type: 'input',
        message: 'What is your LinkedIn URL?',
        name: 'linkedIn',
      },
      {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'gitHub',
      },
  ])
  .then((ans) =>
    ans
      ? userAnswers(ans)
      : console.log('You forgot your password already?!')
  );

  const userAnswers = (ans) => {
    console.log(ans);
    fs.writeFile("input.html", 
    
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTML from node.js</title>
    </head>
    <body>
        <h1>Hello my name is ${ans.name}</h1>
        <p>My general location is ${ans.location}.</p>
        <p>Bio: ${ans.bio}</p>
        <p>LinkedIn: ${ans.linkedIn}</p>
        <p>GitHub: ${ans.gitHub}</p>
    </body>
    </html>`, 
    
    (err) =>
    err ? console.error(err) : console.log('Success!')
  ); 
  }