import { JSONRPCClient } from "jsr:@yieldray/json-rpc-ts";
import { Aria2RawMethods } from "./method.ts";

type Aria2Methods = {
  [K in keyof Aria2RawMethods as K extends `aria2.${infer WithoutPrefix}` ? WithoutPrefix : never]: (
    // the key must start with "aria2."
    ...params: Parameters<Aria2RawMethods[K]>
  ) => Promise<ReturnType<Aria2RawMethods[K]>>;
};

function createAria2Client({ url = "http://localhost:6800/jsonrpc" }: { url?: string } = {}) {
  const requestForResponse = (json: string) =>
    fetch(url, {
      method: "POST",
      body: json,
    }).then((res) => res.text());

  const client = new JSONRPCClient(requestForResponse);

  const methods = new Proxy<Aria2Methods>({} as Aria2Methods, {
    get(_target, p, _receiver) {
      if (typeof p !== "string") return false;
      if (p.startsWith("aria2.") || p.startsWith("system.")) return (...args: any[]) => client.request(p, args);
      return (...args: any[]) => client.request(`aria2.${p}`, args);
    },
  });

  return methods;
}

async function withAria2cProcess(cb: (client: Aria2Methods) => Promise<void>) {
  const command = new Deno.Command("aria2c", {
    // we do not want aria2c to create any file
    args: [
      "--enable-rpc",
      "--rpc-listen-all=false",
      "--rpc-listen-port=6800",
      "--rpc-allow-origin-all",
      "--log=-",
      "--no-netrc",
      "--no-conf",
    ],
    stdout: "inherit",
    stderr: "inherit",
  });

  const process = command.spawn();
  await cb(
    createAria2Client({
      url: "http://localhost:6800/jsonrpc",
    })
  );
  process.kill();
}

withAria2cProcess(async (client) => {
  const version = await client.getVersion();
  console.log(version);
});
