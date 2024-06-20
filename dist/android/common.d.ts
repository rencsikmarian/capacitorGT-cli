import type { Config } from '../definitions';
import type { Plugin } from '../plugin';
export declare function checkAndroidPackage(config: Config): Promise<string | null>;
export declare function getAndroidPlugins(allPlugins: Plugin[]): Promise<Plugin[]>;
export declare function resolvePlugin(plugin: Plugin): Promise<Plugin | null>;
/**
 * Update an Android project with the desired app name and appId.
 * This is a little trickier for Android because the appId becomes
 * the package name.
 */
export declare function editProjectSettingsAndroid(config: Config): Promise<void>;
