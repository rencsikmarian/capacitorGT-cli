import type { Config } from '../definitions';
export interface BuildCommandOptions {
    scheme?: string;
    flavor?: string;
    keystorepath?: string;
    keystorepass?: string;
    keystorealias?: string;
    keystorealiaspass?: string;
    androidreleasetype?: 'AAB' | 'APK';
    signingtype?: 'apksigner' | 'jarsigner';
    configuration: string;
}
export declare function buildCommand(config: Config, selectedPlatformName: string, buildOptions: BuildCommandOptions): Promise<void>;
export declare function build(config: Config, platformName: string, buildOptions: BuildCommandOptions): Promise<void>;
