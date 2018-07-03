import { workspace } from 'vscode';
import { ScriptType } from './scriptChecker';

export interface IConfig {
  '$schema': string;
  externals: IExternals;
}

export interface IExternals {
  [globalName: string]: string | INonModule;
}

export interface INonModule {
  path: string;
  globalName: string;
  globalDependencies?: string[];
}

export default class ExternalLibrary {
  /**
   * Update the external configuration
   * @param configJson
   * @param type
   * @param moduleName
   * @param url
   */
  public static update(configJson: IConfig, type: ScriptType, moduleName: string, url: string, globalName: string, scriptDependencies: string) {
    if (type === ScriptType.module) {
      configJson.externals[moduleName] = url;
    }
    else {
      // Check if it is a plugin or a module
      if (globalName) {
        configJson.externals[moduleName] = {
          path: url,
          globalName: globalName,
          globalDependencies: scriptDependencies.split(',')
        };
      }
      else {
        configJson.externals[moduleName] = {
          path: url,
          globalName: moduleName
        };
      }
    }
    
    return configJson;
  }
}
