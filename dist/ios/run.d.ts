import type { Config } from '../definitions';
import type { RunCommandOptions } from '../tasks/run';
export declare function runIOS(config: Config, { target: selectedTarget, scheme: selectedScheme, configuration: selectedConfiguration }: RunCommandOptions): Promise<void>;
