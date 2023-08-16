// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return "https://img.shields.io/badge/license-" + license + "-blue.svg"
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "MIT":
      return "";
    case "ISC":
      return "";
    case "gpl-2.0":
      return "";
    case "afl-3.0":
      return "";
    case "wtfpl":
      return "";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "" || "none") {
    return `
    ## License

    This project is covered under the ${license}, which you can learn more about by clicking ont the following link: ${renderLicenseLink(license)}
    `;
  };
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(license)}

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



  ## Questions


`;
}

module.exports = generateMarkdown;
