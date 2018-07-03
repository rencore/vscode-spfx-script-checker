import { IScriptData } from './extension';
import * as request from 'request-promise';

export interface IScriptCheck {
  scriptType: string;
}

export enum ScriptType {
  module = 1,
  nonModule
}

export default class ScriptChecker {
  private static _scriptCheckAPI: string = "https://scriptcheck-weu-fn.azurewebsites.net/api/script-check";

  /**
   * Check the script type
   * @param scriptData
   */
  public static async check(scriptData: IScriptData): Promise<ScriptType | string> {
    try {
      // Check the script type
      const scriptTypeData: string = await request(this._scriptCheckAPI, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify(scriptData)
      });

      if (!scriptTypeData) {
        return null;
      }

      const script: IScriptCheck = JSON.parse(scriptTypeData);
      if (!script.scriptType) {
        return null;
      }

      switch (script.scriptType) {
        case "module":
          return ScriptType.module;
        case "non-module":
          return ScriptType.nonModule;
        default:
          return ScriptType.module;
      }

      return null;
    }
    catch (err) {
      return 'Sorry, something went wrong';
    }
  }
}
