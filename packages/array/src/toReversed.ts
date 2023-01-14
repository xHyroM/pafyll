import { exposeObject } from "@pafyll/core";
import {
    __$arrayToReversed,
    __$arrayToReversedThis,
} from "./internals/toReversed.js";

export { __$arrayToReversed as arrayToReversed };

exposeObject(Array, "toReversed", __$arrayToReversedThis);

declare global {
    interface Array<T> {
        toReversed(): T[];
    }
}
