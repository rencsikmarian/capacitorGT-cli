import type { Config } from '../definitions';
export declare function doctorCommand(config: Config, selectedPlatformName: string): Promise<void>;
export declare function doctorCore(config: Config): Promise<void>;
export declare function doctor(config: Config, platformName: string): Promise<void>;
