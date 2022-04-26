module.exports = pageTemp => {
    return `
        ${ProjectName} 

        Project Description: ${Description}

        --Table of Contents-- 
        * Installation Instructions
        * Test Instructions
        * Usage Information
        * Contribution Guidelines
    
        Installation Instructions: ${InstallationInstructions}

        Test Instructions: ${TestInstructions}

        Usage Information: ${UsageInformation}

        Contribution Guidelines: ${ContributionGuidelines}

        --Images--



        --Link to Github Repository--
        ${GithubRepository}

        --Link to Deployed Application--
        ${DeployedApplication}

        
        --Author Information--
        * ${Name}
        * ${Github}
        * ${Email}

        --License--
        ${License}
    `;
};
