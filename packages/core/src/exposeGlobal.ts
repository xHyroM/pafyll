const getObject = (): any => {
    if (typeof globalThis !== "undefined") return globalThis;
    // @ts-expect-error We want to polyfill everything
    if (typeof window !== "undefined") return window;
    // @ts-expect-error We want to polyfill everything
    if (typeof global !== "undefined") return global;
};

export function exposeGlobal(value: any): void;
export function exposeGlobal(name: string, value: any): void;

export function exposeGlobal(...args: any[]) {
    if (args.length === 2) {
        const [name, value] = args;

        getObject()[name] = value;
        return;
    }

    const [value] = args;

    for (const key in value) {
        getObject()[key] = value[key];
    }
}
