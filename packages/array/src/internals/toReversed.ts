export const __$arrayToReversed = <T>(arr: T[]) => {
    const copy = [...arr];
    return copy.reverse();
};

export function __$arrayToReversedThis() {
    // @ts-ignore
    return __$arrayToReversed(this);
}
