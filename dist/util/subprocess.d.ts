export interface RunCommandOptions {
    cwd?: string;
}
export declare function runCommand(command: string, args: readonly string[], options?: RunCommandOptions): Promise<string>;
export declare function getCommandOutput(command: string, args: readonly string[], options?: RunCommandOptions): Promise<string | null>;
export declare function isInstalled(command: string): Promise<boolean>;
