

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  #${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Built with
  ${data.built}
  <br />
  ## Contributing
  ${data.contributing}
  <br />
  Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
  <br />
  ##Contact: ${data.email}<br />
`;
}

module.exports = generateMarkdown;
