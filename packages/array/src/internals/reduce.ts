export const __$arrayReduce = <T>(
    arr: T[],
    callback: (
        previousValue: T,
        currentValue: T,
        index: number,
        array: T[]
    ) => any,
    initialValue?: any
) => {
    if (!initialValue) initialValue = arr[0];

    for (let i = 0; i < arr.length; i++) {
        initialValue = callback(initialValue, arr[i]!, i, arr);
    }

    return initialValue;
};

export function __$arrayReduceThis(
    callback: (
        previousValue: any,
        currentValue: any,
        index: number,
        array: any[]
    ) => any,
    initialValue?: any
) {
    // @ts-ignore
    return __$arrayReduce(this, callback, initialValue);
}
