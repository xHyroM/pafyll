import { __$arrayReduceThis } from "./reduce.js";

export const __$arrayGroupToMap = <T>(
    arr: T[],
    callback: (value: T, index?: number, array?: T[]) => object
): Map<any, T[]> => {
    const reduce =
        typeof Array.prototype.reduce === "function"
            ? Array.prototype.reduce
            : __$arrayReduceThis;

    return reduce.call(
        arr,
        (acc: Map<any, T[]>, item: T, index: number, array: T[]) => {
            const key = callback(item, index, array);
            if (!acc.has(key)) {
                acc.set(key, []);
            }

            acc.get(key)!.push(item);
            return acc;
        },
        new Map()
    );
};

export function __$arrayGroupToMapThis(callback: (value: any) => string) {
    // @ts-ignore
    return __$arrayGroupToMap(this, callback);
}
