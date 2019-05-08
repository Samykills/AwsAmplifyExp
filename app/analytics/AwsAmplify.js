import Amplify, { Analytics } from "aws-amplify";
class AwsAmplify {
  static initalize() {
    const amplifyConfig = {
      Auth: {
        identityPoolId: "TestID",
        region: "us-east-1"
      }
    };
    //Initialize Amplify
    Amplify.configure(amplifyConfig);

    const analyticsConfig = {
      AWSPinpoint: {
        // Amazon Pinpoint App Client ID
        appId: "TestAppID",
        // Amazon service region
        region: "us-east-1",
        mandatorySignIn: false
      }
    };

    Analytics.configure(analyticsConfig);
  }

  /**
   *
   * @param {String} eventName - name of the event or module - "traffic"
   * @param {String} type - Type of event- ("entry"/"exit") or anything
   * @param {String} value - Type of event- can be null or anything
   */
  static recordEvent(eventName, action, title) {
    let attributesJson = {};

    Analytics.record({
      name: eventName,
      attributes: attributesJson
    });
  }
}

export default AwsAmplify;
