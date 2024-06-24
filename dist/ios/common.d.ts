import type { Config } from '../definitions';
import type { Plugin } from '../plugin';
export declare function checkIOSPackage(config: Config): Promise<string | null>;
export declare function checkBundler(config: Config): Promise<string | null>;
export declare function checkCocoaPods(config: Config): Promise<string | null>;
export declare function getIOSPlugins(allPlugins: Plugin[]): Promise<Plugin[]>;
export declare function resolvePlugin(plugin: Plugin): Promise<Plugin | null>;
/**
 * Update the native project files with the desired app id and app name
 */
export declare function editProjectSettingsIOS(config: Config): Promise<void>;
