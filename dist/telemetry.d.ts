import type { Config } from './definitions';
import type { SystemConfig } from './sysconfig';
export declare const THANK_YOU: string;
export interface CommandMetricData {
    app_id: string;
    command: string;
    arguments: string;
    options: string;
    duration: number;
    error: string | null;
    node_version: string;
    os: string;
}
export interface Metric<N extends string, D> {
    name: N;
    timestamp: string;
    session_id: string;
    source: 'capacitor_cli';
    value: D;
}
type CommanderAction = (...args: any[]) => void | Promise<void>;
export declare function telemetryAction(config: Config, action: CommanderAction): CommanderAction;
/**
 * If telemetry is enabled, send a metric via IPC to a forked process for uploading.
 */
export declare function sendMetric<D>(sysconfig: Pick<SystemConfig, 'machine' | 'telemetry'>, name: string, data: D): Promise<void>;
export {};
