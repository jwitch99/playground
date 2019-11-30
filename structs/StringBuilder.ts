interface StringBuilderType {
    append(obj: Object): void
    toString(): string
    charAt(loc: number): string
    deleteCharAt(index: number): void
    substr(start: number, end?: number): string
}

class StringBuilder implements StringBuilderType {
    lazyStore: string[]
    chars: string

    constructor(str: Object) {
        this.chars = StringBuilder.convertToString(str)
    }

    append(obj: Object): void {
        this.chars += StringBuilder.convertToString(obj)
    }



    private static convertToString(val: Object): string {
        return val && String(val)
    }

    charAt(loc: number): string {
        return this.chars[loc]
    }

    deleteCharAt(index: number): void {
    }

    substr(start: number, end?: number): string {
        return '';
    }
}