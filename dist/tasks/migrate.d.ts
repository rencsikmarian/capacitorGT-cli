import type { Config } from '../definitions';
export declare function migrateCommand(config: Config, noprompt: boolean, packagemanager: string): Promise<void>;
export declare function patchOldCapacitorPlugins(config: Config): Promise<void[]>;
