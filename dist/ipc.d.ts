import type { Metric } from './telemetry';
export interface TelemetryIPCMessage {
    type: 'telemetry';
    data: Metric<string, unknown>;
}
export type IPCMessage = TelemetryIPCMessage;
/**
 * Send an IPC message to a forked process.
 */
export declare function send(msg: IPCMessage): Promise<void>;
/**
 * Receive and handle an IPC message.
 *
 * Assume minimal context and keep external dependencies to a minimum.
 */
export declare function receive(msg: IPCMessage): Promise<void>;
