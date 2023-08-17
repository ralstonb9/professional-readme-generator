// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT":
      return "![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg)";
    case "ISC":
      return "![license: ISC](https://img.shields.io/badge/license-ISC-blue.svg)";
    case "GPL-2.0":
      return "![license: GPL-2.0](https://img.shields.io/badge/license-GPL2-blue.svg)";
    case "AFL-3.0":
      return "![license: AFL-3.0](https://img.shields.io/badge/license-AFL3-blue.svg)";
    case "WTFPL":
      return "![license: WTFPL](https://img.shields.io/badge/license-WTFPL-blue.svg)";
    default:
      return "";
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "MIT":
      return "[Lincense Information](https://opensource.org/licenses/)";
    case "ISC":
      return "[Lincense Information](https://opensource.org/licenses/)";
    case "GPL-2.0":
      return "[Lincense Information](https://opensource.org/licenses/)";
    case "AFL-3.0":
      return "[Lincense Information](https://opensource.org/licenses/)";
    case "WTFPL":
      return "[Lincense Information](https://opensource.org/licenses/)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "no license") {
    return `
    ## License

    This project is covered under the ${license} license, which you can learn more about by clicking on the following link: ${renderLicenseLink(license)}
    `;
  };
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.credits}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions feel free to reach out to me via my Github: [${data.github}](https://github.com/${data.github}) or you can e-mail me at ${data.email}

`;
}

module.exports = generateMarkdown;
