import { exposeObject } from "@pafyll/core";
import {
    __$arrayToSorted,
    __$arrayToSortedThis,
} from "./internals/toSorted.js";

export { __$arrayToSorted as arrayToSorted };

exposeObject(Array, "toSorted", __$arrayToSortedThis);

declare global {
    interface Array<T> {
        toSorted(compareFn?: (a: T, b: T) => number): T[];
    }
}
