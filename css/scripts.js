function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute('6Lf8CSUpAAAAAHzNpGidw9evCd8-MWIB5Z16g__P', {action: 'LOGIN'});
    });
  }
  const {RecaptchaEnterpriseServiceClient} = require('@google-cloud/recaptcha-enterprise');

  
  async function createAssessment({

    projectID = "my-project-1077-1701735074391",
    recaptchaKey = "6Lf8CSUpAAAAAHzNpGidw9evCd8-MWIB5Z16g__P",
    token = "action-token",
    recaptchaAction = "action-name",
  }) {
    const client = new RecaptchaEnterpriseServiceClient();
    const projectPath = client.projectPath(projectID);
  
    // Build the assessment request.
    const request = ({
      assessment: {
        event: {
          token: token,
          siteKey: recaptchaKey,
        },
      },
      parent: projectPath,
    });
  
    const [ response ] = await client.createAssessment(request);
  

    if (!response.tokenProperties.valid) {
      console.log(`The CreateAssessment call failed because the token was: ${response.tokenProperties.invalidReason}`);
      return null;
    }
  

    if (response.tokenProperties.action === recaptchaAction) {

      console.log(`The reCAPTCHA score is: ${response.riskAnalysis.score}`);
      response.riskAnalysis.reasons.forEach((reason) => {
        console.log(reason);
      });
  
      return response.riskAnalysis.score;
    } else {
      console.log("The action attribute in your reCAPTCHA tag does not match the action you are expecting to score");
      return null;
    }
  }