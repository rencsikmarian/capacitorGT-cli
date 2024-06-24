import type { Config } from '../definitions';
import type { Plugin } from '../plugin';
export declare function updateAndroid(config: Config): Promise<void>;
export declare function installGradlePlugins(config: Config, capacitorPlugins: Plugin[], cordovaPlugins: Plugin[]): Promise<void>;
export declare function handleCordovaPluginsGradle(config: Config, cordovaPlugins: Plugin[]): Promise<void>;
