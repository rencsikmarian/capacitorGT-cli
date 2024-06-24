import { StreamOutputStrategy, TTYOutputStrategy } from '@ionic/cli-framework-output';
import type { Answers, PromptObject } from 'prompts';
export declare const output: StreamOutputStrategy | TTYOutputStrategy;
export declare const logger: import("@ionic/cli-framework-output").Logger;
export declare function logPrompt<T extends string>(msg: string, promptObject: PromptObject<T>): Promise<Answers<T>>;
export declare function logSuccess(msg: string): void;
