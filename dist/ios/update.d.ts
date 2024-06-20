import type { Config } from '../definitions';
import type { Plugin } from '../plugin';
export declare function updateIOS(config: Config, deployment: boolean): Promise<void>;
export declare function installCocoaPodsPlugins(config: Config, plugins: Plugin[], deployment: boolean): Promise<void>;
