export interface SystemConfig {
    /**
     * A UUID that anonymously identifies this computer.
     */
    readonly machine: string;
    /**
     * Whether telemetry is enabled or not.
     *
     * If undefined, a choice has not yet been made.
     */
    readonly telemetry?: boolean;
    /**
     * Wheter the user choose to signup or not.
     *
     * If undefined, the prompt has not been shown.
     */
    readonly signup?: boolean;
}
export declare function readConfig(): Promise<SystemConfig>;
export declare function writeConfig(sysconfig: SystemConfig): Promise<void>;
