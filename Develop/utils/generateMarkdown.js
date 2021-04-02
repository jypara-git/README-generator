// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ## Description
  ${data.Description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  The following necessary dependencies must be installed to run the application: 
  ${data.Installation}
  ## Usage
  In order to use this app,
   ${data.Usage}
  ## License
  This project is licensed under the ${data.License} license.
  ## Contributing
  ${data.Contributing}
  ## Tests 
  ${data.Tests}
  ## Questions
  If you have any questions contact me on [GitHub](https://github.com/${data.Username})
  or email me at ${data.email}
`;
}

module.exports = generateMarkdown;
