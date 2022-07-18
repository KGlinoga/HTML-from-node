const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    // {
    //   type: 'input',
    //   message: 'What is your location?',
    //   name: 'location',
    // },
    // {
    //   type: 'input',
    //   message: 'Tell us about yourself:',
    //   name: 'bio',
    // },
    // {
    //     type: 'input',
    //     message: 'What is your LinkedIn URL?',
    //     name: 'linkedIn',
    //   },
    //   {
    //     type: 'input',
    //     message: 'What is your GitHub URL?',
    //     name: 'gitHub',
    //   },
  ])
  .then((response) =>
    response
      ? userAnswers(response)
      : console.log('You forgot your password already?!')
  );

  const userAnswers = (response) => {
    console.log(response);
    fs.writeFile("input.txt", response.name, (err) =>
    err ? console.error(err) : console.log('Success!')
  ); 
  }