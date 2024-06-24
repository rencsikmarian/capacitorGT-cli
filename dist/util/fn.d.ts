export declare const tryFn: <T extends (...args: any[]) => Promise<R>, R>(fn: T, ...args: any[]) => Promise<R | null>;
