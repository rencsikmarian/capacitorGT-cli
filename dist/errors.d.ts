export declare abstract class BaseException<T> extends Error {
    readonly message: string;
    readonly code: T;
    constructor(message: string, code: T);
}
export declare class FatalException extends BaseException<'FATAL'> {
    readonly message: string;
    readonly exitCode: number;
    constructor(message: string, exitCode?: number);
}
export declare function fatal(message: string): never;
export declare function isFatal(e: any): e is FatalException;
