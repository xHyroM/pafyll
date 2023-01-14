export const __$arrayToSorted = <T>(
    arr: T[],
    compareFn?: (a: T, b: T) => number
) => {
    const copy = [...arr];
    return compareFn ? copy.sort(compareFn) : copy.sort();
};

export function __$arrayToSortedThis<T>(compareFn?: (a: T, b: T) => number) {
    // @ts-ignore
    return __$arrayToSorted(this, compareFn);
}
