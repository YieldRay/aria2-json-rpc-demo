import { JSONRPCClient } from "https://deno.land/x/json_rpc_ts@v0.1.2/mod.ts";
import { Aria2RawMethods } from "./method.ts";

type Aria2Methods = {
    [K in keyof Aria2RawMethods]: (
        ...params: Parameters<Aria2RawMethods[K]>
    ) => Promise<ReturnType<Aria2RawMethods[K]>>;
};

export function createAria2Client({ url = "http://localhost:6800/jsonrpc" }: { url?: string } = {}) {
    const requestForResponse = (json: string) =>
        fetch(url, {
            method: "POST",
            body: json,
        }).then((res) => res.text());

    const client = new JSONRPCClient(requestForResponse);

    const methods = new Proxy<Aria2Methods>({} as Aria2Methods, {
        get(_target, p, _receiver) {
            return (...args: any[]) => client.request(p as string, args);
        },
    });

    return methods;
}

const client = createAria2Client();

const version = await client["aria2.getVersion"]();

console.log(version);
