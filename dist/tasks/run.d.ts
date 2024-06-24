import type { Config } from '../definitions';
export interface RunCommandOptions {
    scheme?: string;
    flavor?: string;
    list?: boolean;
    target?: string;
    sync?: boolean;
    forwardPorts?: string;
    liveReload?: boolean;
    host?: string;
    port?: string;
    configuration?: string;
}
export declare function runCommand(config: Config, selectedPlatformName: string, options: RunCommandOptions): Promise<void>;
export declare function run(config: Config, platformName: string, options: RunCommandOptions): Promise<void>;
