import { __$arrayReduceThis } from "./reduce.js";

export const __$arrayGroup = <T>(
    arr: T[],
    callback: (value: T, index?: number, array?: T[]) => string
) => {
    const reduce =
        typeof Array.prototype.reduce === "function"
            ? Array.prototype.reduce
            : __$arrayReduceThis;

    return reduce.call(
        arr,
        (
            acc: Record<string | number | symbol, T[]>,
            item: T,
            index: number,
            array: T[]
        ) => {
            const key = callback(item, index, array);
            if (!acc[key]) {
                acc[key] = [];
            }

            acc[key]!.push(item);
            return acc;
        },
        {}
    );
};

export function __$arrayGroupThis(callback: (value: any) => string) {
    // @ts-ignore
    return __$arrayGroup(this, callback);
}
