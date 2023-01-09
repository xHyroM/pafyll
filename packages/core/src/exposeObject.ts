export function exposeObject(object: any, value: any): void;
export function exposeObject(object: any, name: string, value: any): void;

export function exposeObject(...args: any[]) {
    if (args.length === 3) {
        const [object, name, value] = args;

        object.prototype[name] = value;
        return;
    }

    const [object, value] = args;

    for (const key in value) {
        object.prototype[key] = value[key];
    }
}
