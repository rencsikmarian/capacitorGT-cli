import type typescript from 'typescript';
/**
 * @see https://github.com/ionic-team/stencil/blob/HEAD/src/compiler/sys/node-require.ts
 */
export declare const requireTS: (ts: typeof typescript, p: string) => unknown;
export declare function resolveNode(root: string, ...pathSegments: string[]): string | null;
