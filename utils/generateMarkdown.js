// function to generate markdown for README
function generateMarkdown(content) {
  return `# ${content.title}

  ## Description
  > ${content.description}

  ## Table of Contents
  1. [Installation](#install)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  
  ## Installation <a name="install"></a>
  ${content.install}
  
  ## Usage <a name="usage"></a>
  ${content.usage}
  
  ## License <a name="license"></a>
  This project is ${content.license} licensed.
  
  ## Contributing <a name="contributing"></a>
  ${content.contributing}
  
  ## Tests <a name="tests"></a>
  ${content.tests}

  ## Questions <a name="questions"></a>
  For any additional questions or other interests in this project, please contact me at:  
  github.com/${content.questionsUserName}  
  or  
  ${content.questionsEmail}
`;
}

module.exports = generateMarkdown;
