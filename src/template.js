
module.exports = tempAns => { console.log(tempAns)
    return `

${tempAns.ProjectName} 

Project Description: ${tempAns.Description}


--Table of Contents-- 
* Installation Instructions
* Test Instructions
* Usage Information
* Contribution Guidelines




Installation Instructions: ${tempAns.InstallationInstructions}

Test Instructions: ${tempAns.TestInstructions}

Usage Information: ${tempAns.UsageInformation}

Contribution Guidelines: ${tempAns.ContributionGuidelines}


--Link to Github Repository--
${tempAns.GithubRepository}

--Alternative Links--
${tempAns.DeployedApplication}




--Author Information--
* ${tempAns.Name}
* ${tempAns.Github}
* ${tempAns.Email}




--License--
${tempAns.license}

    `;
}
