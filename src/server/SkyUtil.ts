export default class SkyUtil {

    public static pull(array: any[], ...removeList: any[]): void {
        for (const el of removeList) {
            const index = array.indexOf(el);
            if (index !== -1) {
                array.splice(index, 1);
            }
        }
    }

    public static insert(array: any[], index: number, item: any): void {
        array.splice(index, 0, item);
    }

    public static random(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public static repeat(times: number, func: (index: number) => void | boolean) {
        for (let i = 0; i < times; i += 1) {
            if (func(i) === false) {
                break;
            }
        }
    }

    public static repeatResult(times: number, func: (index: number) => any) {
        const results: any[] = [];
        for (let i = 0; i < times; i += 1) {
            results.push(func(i));
        }
        return results;
    }

    public static async repeatResultAsync(times: number, func: (index: number) => Promise<any>): Promise<any[]> {
        const results: any[] = [];
        for (let i = 0; i < times; i += 1) {
            results.push(await func(i));
        }
        return results;
    }

    public static toTitleCase(str: string) {
        return str.replace(/(^\w|\s\w)(\S*)/g, (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase());
    }

    public static shortenAddress(address: string) {
        return `${address.substring(0, 6)}...${address.substring(38)}`
    }

    public static numberWithCommas(x: string, fixed?: number) {
        if (fixed === undefined || +(+x) > Number.MAX_SAFE_INTEGER) {
            const parts = x.split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts[1] === "0" ? parts[0] : parts.join(".");
        }
        const parts = String(+(+x).toFixed(fixed)).split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }

    public static shuffle(array: number[]) {
        let currentIndex = array.length;
        while (currentIndex !== 0) {
            const randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    public static jsonParseWithUndefined(data: any) {
        if (data === null) {
            return undefined;
        }
        return JSON.parse(data, (k, array) => {
            if (Array.isArray(array) === true) {
                for (const [index, v] of array.entries()) {
                    if (v === null) {
                        array[index] = undefined;
                    }
                }
            }
            return array;
        });
    }
}
