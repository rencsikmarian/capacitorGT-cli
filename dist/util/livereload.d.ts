import type { Config } from '../definitions';
import type { RunCommandOptions } from '../tasks/run';
declare class CapLiveReload {
    configJsonToRevertTo: {
        json: string | null;
        platformPath: string | null;
    };
    constructor();
    getIpAddress(name?: string, family?: any): any;
    editExtConfigForLiveReload(config: Config, platformName: string, options: RunCommandOptions, rootConfigChange?: boolean): Promise<any>;
    editCapConfigForLiveReload(config: Config, platformName: string, options: RunCommandOptions, rootConfigChange?: boolean): Promise<void>;
    revertCapConfigForLiveReload(): Promise<void>;
}
export declare const CapLiveReloadHelper: CapLiveReload;
export {};
