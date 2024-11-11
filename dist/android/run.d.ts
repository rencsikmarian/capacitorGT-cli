import type { Config } from '../definitions';
import type { RunCommandOptions } from '../tasks/run';
export declare function runAndroid(config: Config, { target: selectedTarget, flavor: selectedFlavor, forwardPorts: selectedPorts }: RunCommandOptions): Promise<void>;
