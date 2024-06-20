import type { Config } from './definitions';
export declare const enum PluginType {
    Core = 0,
    Cordova = 1,
    Incompatible = 2
}
export interface PluginManifest {
    readonly ios?: {
        readonly src?: string;
    };
    readonly android?: {
        readonly src?: string;
    };
}
export interface Plugin {
    id: string;
    name: string;
    version: string;
    rootPath: string;
    manifest?: PluginManifest;
    repository?: any;
    xml?: any;
    ios?: {
        name: string;
        type: PluginType;
        path: string;
    };
    android?: {
        type: PluginType;
        path: string;
    };
}
export declare function getIncludedPluginPackages(config: Config, platform: string): readonly string[] | undefined;
export declare function getPlugins(config: Config, platform: string): Promise<Plugin[]>;
export declare function resolvePlugin(config: Config, name: string): Promise<Plugin | null>;
export declare function getDependencies(config: Config): string[];
export declare function fixName(name: string): string;
export declare function printPlugins(plugins: Plugin[], platform: string, type?: 'capacitor' | 'cordova' | 'incompatible'): void;
export declare function getPluginPlatform(p: Plugin, platform: string): any;
export declare function getPlatformElement(p: Plugin, platform: string, elementName: string): any;
export declare function getPluginType(p: Plugin, platform: string): PluginType;
/**
 * Get each JavaScript Module for the given plugin
 */
export declare function getJSModules(p: Plugin, platform: string): any;
/**
 * Get each asset tag for the given plugin
 */
export declare function getAssets(p: Plugin, platform: string): any;
export declare function getFilePath(config: Config, plugin: Plugin, path: string): string;
/**
 * For a given plugin, return all the plugin.xml elements with elementName, checking root and specified platform
 */
export declare function getAllElements(p: Plugin, platform: string, elementName: string): any;
