import type { Config } from './definitions';
import type { Plugin } from './plugin';
/**
 * Build the root cordova_plugins.js file referencing each Plugin JS file.
 */
export declare function generateCordovaPluginsJSFile(config: Config, plugins: Plugin[], platform: string): string;
/**
 * Build the plugins/* files for each Cordova plugin installed.
 */
export declare function copyPluginsJS(config: Config, cordovaPlugins: Plugin[], platform: string): Promise<void>;
export declare function copyCordovaJS(config: Config, platform: string): Promise<void>;
export declare function createEmptyCordovaJS(config: Config, platform: string): Promise<void>;
export declare function removePluginFiles(config: Config, platform: string): Promise<void>;
export declare function autoGenerateConfig(config: Config, cordovaPlugins: Plugin[], platform: string): Promise<void>;
export declare function handleCordovaPluginsJS(cordovaPlugins: Plugin[], config: Config, platform: string): Promise<void>;
export declare function getCordovaPlugins(config: Config, platform: string): Promise<Plugin[]>;
export declare function logCordovaManualSteps(cordovaPlugins: Plugin[], config: Config, platform: string): Promise<void>;
export declare function checkPluginDependencies(plugins: Plugin[], platform: string): Promise<void>;
export declare function getIncompatibleCordovaPlugins(platform: string): string[];
export declare function needsStaticPod(plugin: Plugin): boolean;
export declare function getCordovaPreferences(config: Config): Promise<any>;
export declare function writeCordovaAndroidManifest(cordovaPlugins: Plugin[], config: Config, platform: string, cleartext?: boolean): Promise<void>;
