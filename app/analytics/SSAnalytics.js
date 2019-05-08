import AwsAmplify from "./AwsAmplify";
class SSAnalytics {
  /**
   * Function to initialize firebase and AWS Pinpoint via amplify library
   */
  static initalize() {
    AwsAmplify.initalize();
  }

  /**
   *
   * @param {String} eventName - name of the event or module - "traffic"
   * @param {String} action - Type of event- ("Traffic_Visited"/"Bites_Payment") or anything
   * @param {String} title - Type of event- can be null or anything
   */
  static recordEvent(eventName, action, title) {
    try {
      AwsAmplify.recordEvent(eventName, action, title);
    } catch (e) {
      console.log(e);
    }
  }
}

export default SSAnalytics;
