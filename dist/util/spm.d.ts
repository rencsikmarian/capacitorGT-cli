import type { Config } from '../definitions';
import type { Plugin } from '../plugin';
export interface SwiftPlugin {
    name: string;
    path: string;
}
export declare function checkPackageManager(config: Config): Promise<'Cocoapods' | 'SPM'>;
export declare function findPackageSwiftFile(config: Config): Promise<string>;
export declare function generatePackageFile(config: Config, plugins: Plugin[]): Promise<void>;
