import type { AppConfig, Config, ExternalConfig } from './definitions';
export declare const CONFIG_FILE_NAME_TS = "capacitor.config.ts";
export declare const CONFIG_FILE_NAME_JS = "capacitor.config.js";
export declare const CONFIG_FILE_NAME_JSON = "capacitor.config.json";
export declare function loadConfig(): Promise<Config>;
export declare function writeConfig(extConfig: ExternalConfig, extConfigFilePath: string): Promise<void>;
type ExtConfigPairs = Pick<AppConfig, 'extConfigType' | 'extConfigName' | 'extConfigFilePath' | 'extConfig'>;
export declare function checkExternalConfig(config: ExtConfigPairs): void;
export {};
