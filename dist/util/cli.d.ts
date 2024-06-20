import envPaths from 'env-paths';
export declare const ENV_PATHS: envPaths.Paths;
export type CommanderAction = (...args: any[]) => void | Promise<void>;
export declare function wrapAction(action: CommanderAction): CommanderAction;
