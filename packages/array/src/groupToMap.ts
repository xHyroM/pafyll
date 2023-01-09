import { exposeObject } from "@pafyll/core";
import {
    __$arrayGroupToMap,
    __$arrayGroupToMapThis,
} from "./internals/groupToMap.js";

export { __$arrayGroupToMap as arrayGroupToMap };

exposeObject(Array, "groupToMap", __$arrayGroupToMapThis);

declare global {
    interface Array<T> {
        groupToMap(callback: (value: T) => object): Map<any, T[]>;
        groupToMap(
            callback: (value: T, index: number) => object
        ): Map<any, T[]>;
        groupToMap(
            callback: (value: T, index: number, array: this) => object
        ): Map<any, T[]>;
    }
}
