import type { CheckFunction } from '../common';
import type { Config } from '../definitions';
export declare function updateCommand(config: Config, selectedPlatformName: string, deployment: boolean): Promise<void>;
export declare function updateChecks(config: Config, platforms: string[]): CheckFunction[];
export declare function update(config: Config, platformName: string, deployment: boolean): Promise<void>;
