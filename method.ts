import { AddUriOptions, GlobalOptions } from "./types/option.ts";
import { StatusKey, Status, Uri, Peer, Server, Version, GlobalStat } from "./types/result.ts";

/**
 * raw method, without token param
 */
export interface Aria2RawMethods {
  /**
   * https://aria2.github.io/manual/en/html/aria2c.html#aria2.addUri
   */
  "aria2.addUri": (urls: string[], options?: AddUriOptions, position?: number) => string;
  "aria2.addTorrent": (torrentBase64: string, uris?: string[], options?: AddUriOptions, position?: number) => string;
  "aria2.addMetalink": (metalink?: string, options?: AddUriOptions, position?: number) => string;
  "aria2.remove": (gid: string) => string;
  "aria2.forceRemove": (gid: string) => string;
  "aria2.pause": (gid: string) => string;
  "aria2.pauseAll": () => "OK";
  "aria2.forcePause": (gid: string) => string;
  "aria2.forcePauseAll": () => "OK";
  "aria2.unpause": (gid: string) => string;
  "aria2.unpauseAll": () => "OK";
  /**
   * https://aria2.github.io/manual/en/html/aria2c.html#aria2.tellStatus
   */
  "aria2.tellStatus": (gid: string, keys?: Array<StatusKey>) => Status;
  "aria2.getUris": (gid: string) => Array<Uri>;
  "aria2.getFiles": (gid: string) => Array<File>;
  "aria2.getPeers": (gid: string) => Array<Peer>;
  "aria2.getServers": (gid: string) => Array<Server>;
  "aria2.tellActive": (keys?: string[]) => Array<Status>;
  "aria2.tellWaiting": (offset: number, num: number, keys?: Array<StatusKey>) => Array<Status>;
  "aria2.tellStopped": (offset: number, num: number, keys?: Array<StatusKey>) => Array<Status>;
  "aria2.changePosition": (gid: string, pos: number, how: "POS_SET" | "POS_CUR" | "POS_END") => number;
  "aria2.changeUri": (
    gid: string,
    fileIndex: number,
    delUris: string[],
    addUris: string[],
    position?: number
  ) => [delCount: number, addCount: number];
  "aria2.getOption": (gid: string) => AddUriOptions;
  "aria2.changeOption": (gid: string, options: AddUriOptions) => "OK";
  "aria2.getGlobalOption": () => GlobalOptions;
  "aria2.changeGlobalOption": (options: GlobalOptions) => GlobalOptions;
  "aria2.getGlobalStat": () => GlobalStat;
  "aria2.purgeDownloadResult": () => "OK";
  "aria2.removeDownloadResult": (gid: string) => "OK";
  "aria2.getVersion": () => Version;
  "aria2.getSessionInfo": () => { sessionId: string };
  "aria2.shutdown": () => "OK";
  "aria2.forceShutdown": () => "OK";
  "aria2.saveSession": () => "OK";
  /* prevent: Type instantiation is excessively deep and possibly infinite. */
  // "system.multicall": <T extends keyof Aria2RawMethods>(
  //     methods: Array<{
  //         methodName: T;
  //         params: Parameters<Aria2RawMethods[T]>;
  //     }>
  // ) => any[];
  "system.multicall": (
    methods: Array<{
      methodName: string;
      params: Array<any>;
    }>
  ) => Array<any>;
  "system.listMethods": () => string[];
  "system.listNotifications": () => string[];
}
