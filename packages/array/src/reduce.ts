import { exposeObject } from "@pafyll/core";
import { __$arrayReduce, __$arrayReduceThis } from "./internals/reduce.js";

export { __$arrayReduce as arrayReduce };

exposeObject(Array, "reduce", __$arrayReduceThis);

declare global {
    interface Array<T> {
        reduce(
            callback: (
                previousValue: T,
                currentValue: T,
                index: number,
                array: Array<T>
            ) => any
        ): T;
        reduce(
            callback: (
                previousValue: T,
                currentValue: T,
                index: number,
                array: Array<T>
            ) => any,
            initialValue: T
        ): T;
        reduce<U>(
            callback: (
                previousValue: T,
                currentValue: T,
                index: number,
                array: Array<T>
            ) => any,
            initialValue: U
        ): U;
    }
}
