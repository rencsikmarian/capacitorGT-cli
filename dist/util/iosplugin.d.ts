import type { Config } from '../definitions';
import type { Plugin } from '../plugin';
export declare function getPluginFiles(plugins: Plugin[]): Promise<string[]>;
export declare function findPluginClasses(files: string[]): Promise<string[]>;
export declare function writePluginJSON(config: Config, classList: string[]): Promise<void>;
export declare function generateIOSPackageJSON(config: Config, plugins: Plugin[]): Promise<void>;
