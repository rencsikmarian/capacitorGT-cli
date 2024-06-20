import type { Config } from '../definitions';
export declare function copyCommand(config: Config, selectedPlatformName: string, inline?: boolean): Promise<void>;
export declare function copy(config: Config, platformName: string, inline?: boolean): Promise<void>;
interface LiveUpdateConfig {
    key?: string;
}
interface FederatedApp {
    name: string;
    webDir: string;
}
interface FederatedCapacitor {
    shell: Omit<FederatedApp, 'webDir'>;
    apps: FederatedApp[];
    liveUpdatesKey?: string;
}
declare module '../declarations' {
    interface PluginsConfig {
        LiveUpdates?: LiveUpdateConfig;
        FederatedCapacitor?: FederatedCapacitor;
    }
}
export {};
