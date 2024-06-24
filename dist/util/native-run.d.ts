import type { PlatformTarget } from '../common';
import type { RunCommandOptions } from './subprocess';
export declare function runNativeRun(args: readonly string[], options?: RunCommandOptions): Promise<string>;
export declare function getPlatformTargets(platformName: string): Promise<PlatformTarget[]>;
