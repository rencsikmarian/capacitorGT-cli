import type { Config } from '../definitions';
/**
 * Sync is a copy and an update in one.
 */
export declare function syncCommand(config: Config, selectedPlatformName: string, deployment: boolean, inline?: boolean): Promise<void>;
export declare function sync(config: Config, platformName: string, deployment: boolean, inline?: boolean): Promise<void>;
