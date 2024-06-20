export declare function allSerial<T>(funcs: (() => Promise<T>)[]): Promise<T[]>;
export type PromiseExecutor<T> = (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void;
export type PromiseOnFulfilled<T, TResult> = ((value: T) => TResult | PromiseLike<TResult>) | undefined | null;
export type PromiseOnRejected<TResult> = ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null;
export declare class LazyPromise<T> extends Promise<T> {
    private _executor;
    private _promise?;
    constructor(executor: PromiseExecutor<T>);
    then<TResult1 = T, TResult2 = never>(onfulfilled?: PromiseOnFulfilled<T, TResult1>, onrejected?: PromiseOnRejected<TResult2>): Promise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: PromiseOnRejected<TResult>): Promise<T | TResult>;
}
export declare function lazy<T>(fn: () => T | Promise<T>): LazyPromise<T>;
