import { exposeObject } from "@pafyll/core";
import { __$arrayGroup, __$arrayGroupThis } from "./internals/group.js";

export { __$arrayGroup as arrayGroup };

exposeObject(Array, "group", __$arrayGroupThis);

declare global {
    interface Array<T> {
        group(
            callback: (value: T) => string
        ): Record<string | number | symbol, T[]>;
        group(
            callback: (value: T, index: number) => string
        ): Record<string | number | symbol, T[]>;
        group(
            callback: (value: T, index: number, array: this) => string
        ): Record<string | number | symbol, T[]>;
    }
}
