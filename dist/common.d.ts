import type { Config, PackageJson } from './definitions';
export type CheckFunction = () => Promise<string | null>;
export declare function check(checks: CheckFunction[]): Promise<void>;
export declare function checkWebDir(config: Config): Promise<string | null>;
export declare function checkPackage(): Promise<string | null>;
export declare function checkCapacitorPlatform(config: Config, platform: string): Promise<string | null>;
export declare function checkAppConfig(config: Config): Promise<string | null>;
export declare function checkAppDir(config: Config, dir: string): Promise<string | null>;
export declare function checkAppId(config: Config, id: string): Promise<string | null>;
export declare function checkAppName(config: Config, name: string): Promise<string | null>;
export declare function wait(time: number): Promise<void>;
export declare function runHooks(config: Config, platformName: string, dir: string, hook: string): Promise<void>;
export declare function runPlatformHook(config: Config, platformName: string, platformDir: string, hook: string): Promise<void>;
export interface RunTaskOptions {
    spinner?: boolean;
}
export declare function runTask<T>(title: string, fn: () => Promise<T>): Promise<T>;
export declare function getCapacitorPackage(config: Config, name: string): Promise<PackageJson | null>;
export declare function requireCapacitorPackage(config: Config, name: string): Promise<PackageJson>;
export declare function getCapacitorPackageVersion(config: Config, platform: string): Promise<string>;
export declare function getCoreVersion(config: Config): Promise<string>;
export declare function getCLIVersion(config: Config): Promise<string>;
export declare function getProjectPlatformDirectory(config: Config, platform: string): Promise<string | null>;
export declare function selectPlatforms(config: Config, selectedPlatformName?: string): Promise<string[]>;
export declare function getKnownPlatforms(): Promise<string[]>;
export declare function isValidPlatform(platform: string): Promise<boolean>;
export declare function getKnownCommunityPlatforms(): Promise<string[]>;
export declare function isValidCommunityPlatform(platform: string): Promise<boolean>;
export declare function getKnownEnterprisePlatforms(): Promise<string[]>;
export declare function isValidEnterprisePlatform(platform: string): Promise<boolean>;
export declare function promptForPlatform(platforms: string[], promptMessage: string, selectedPlatformName?: string): Promise<string>;
export interface PlatformTarget {
    id: string;
    platform: string;
    virtual: boolean;
    sdkVersion: string;
    name?: string;
    model?: string;
}
export declare function promptForPlatformTarget(targets: PlatformTarget[], selectedTarget?: string): Promise<PlatformTarget>;
export declare function getPlatformTargetName(target: PlatformTarget): string;
export declare function getAddedPlatforms(config: Config): Promise<string[]>;
export declare function checkPlatformVersions(config: Config, platform: string): Promise<void>;
export declare function resolvePlatform(config: Config, platform: string): string | null;
export declare function checkJDKMajorVersion(): Promise<number>;
export declare function parseApkNameFromFlavor(flavor: string): string;
