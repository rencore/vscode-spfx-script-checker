import { IScriptData } from './extension';
import * as request from 'request-promise';

interface IScriptInfo {
  score: number;
  max: number;
}

export default class CDNQuality {
  private static _scriptInfoAPI: string = "https://scriptcheck-weu-fn.azurewebsites.net/api/script-info";

  /**
   * Test the CDN quality
   * @param scriptData
   */
  public static async test(scriptData: IScriptData, isSharePointUrl: boolean): Promise<string> {
    let scriptCDN: IScriptInfo = undefined;
    if (isSharePointUrl) {
      scriptCDN = {
        max: 6,
        score: 4
      };
    }
    else {
      scriptCDN = await request(this._scriptInfoAPI, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify(scriptData)
      });
    }

    if (!scriptCDN) {
      return null;
    }

    let quality: string = null;
    // Show notification about the script CDN
    if (scriptCDN.score === scriptCDN.max) {
      quality = "good";
    }
    else if (scriptCDN.score >= 3 && scriptCDN.score < scriptCDN.max) {
      quality = "average";
    }
    else {
      quality = "poor";
    }

    if (quality) {
      return `The quality of the CDN that you are using is: ${quality}`;
    }

    return null;
  }
}
