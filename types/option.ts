export interface AddUriOptions {
  "all-proxy"?: string;
  "all-proxy-passwd"?: string;
  "all-proxy-user"?: string;
  "allow-overwrite"?: string;
  "allow-piece-length-change"?: string;
  "always-resume"?: string;
  "async-dns"?: string;
  "auto-file-renaming"?: string;
  "bt-enable-hook-after-hash-check"?: string;
  "bt-enable-lpd"?: string;
  "bt-exclude-tracker"?: string;
  "bt-external-ip"?: string;
  "bt-force-encryption"?: string;
  "bt-hash-check-seed"?: string;
  "bt-load-saved-metadata"?: string;
  "bt-max-peers"?: string;
  "bt-metadata-only"?: string;
  "bt-min-crypto-level"?: string;
  "bt-prioritize-piece"?: string;
  "bt-remove-unselected-file"?: string;
  "bt-request-peer-speed-limit"?: string;
  "bt-require-crypto"?: string;
  "bt-save-metadata"?: string;
  "bt-seed-unverified"?: string;
  "bt-stop-timeout"?: string;
  "bt-tracker"?: string;
  "bt-tracker-connect-timeout"?: string;
  "bt-tracker-interval"?: string;
  "bt-tracker-timeout"?: string;
  "check-integrity"?: string;
  checksum?: string;
  "conditional-get"?: string;
  "connect-timeout"?: string;
  "content-disposition-default-utf8"?: string;
  continue?: string;
  dir?: string;
  "dry-run"?: string;
  "enable-http-keep-alive"?: string;
  "enable-http-pipelining"?: string;
  "enable-mmap"?: string;
  "enable-peer-exchange"?: string;
  "file-allocation"?: string;
  "follow-metalink"?: string;
  "follow-torrent"?: string;
  "force-save"?: string;
  "ftp-passwd"?: string;
  "ftp-pasv"?: string;
  "ftp-proxy"?: string;
  "ftp-proxy-passwd"?: string;
  "ftp-proxy-user"?: string;
  "ftp-reuse-connection"?: string;
  "ftp-type"?: string;
  "ftp-user"?: string;
  gid?: string;
  "hash-check-only"?: string;
  header?: string;
  "http-accept-gzip"?: string;
  "http-auth-challenge"?: string;
  "http-no-cache"?: string;
  "http-passwd"?: string;
  "http-proxy"?: string;
  "http-proxy-passwd"?: string;
  "http-proxy-user"?: string;
  "http-user"?: string;
  "https-proxy"?: string;
  "https-proxy-passwd"?: string;
  "https-proxy-user"?: string;
  "index-out"?: string;
  "lowest-speed-limit"?: string;
  "max-connection-per-server"?: string;
  "max-download-limit"?: string;
  "max-file-not-found"?: string;
  "max-mmap-limit"?: string;
  "max-resume-failure-tries"?: string;
  "max-tries"?: string;
  "max-upload-limit"?: string;
  "metalink-base-uri"?: string;
  "metalink-enable-unique-protocol"?: string;
  "metalink-language"?: string;
  "metalink-location"?: string;
  "metalink-os"?: string;
  "metalink-preferred-protocol"?: string;
  "metalink-version"?: string;
  "min-split-size"?: string;
  "no-file-allocation-limit"?: string;
  "no-netrc"?: string;
  "no-proxy"?: string;
  out?: string;
  "parameterized-uri"?: string;
  pause?: string;
  "pause-metadata"?: string;
  "piece-length"?: string;
  "proxy-method"?: string;
  "realtime-chunk-checksum"?: string;
  referer?: string;
  "remote-time"?: string;
  "remove-control-file"?: string;
  "retry-wait"?: string;
  "reuse-uri"?: string;
  "rpc-save-upload-metadata"?: string;
  "seed-ratio"?: string;
  "seed-time"?: string;
  "select-file"?: string;
  split?: string;
  "ssh-host-key-md"?: string;
  "stream-piece-selector"?: string;
  timeout?: string;
  "uri-selector"?: string;
  "use-head"?: string;
  "user-agent"?: string;
}

export interface BasicOptions {
  dir?: string;
  "max-concurrent-downloads"?: number;
  "check-integrity"?: boolean;
}

export interface HttpFtpSftpOptions extends BasicOptions {
  "all-proxy"?: string;
  "all-proxy-passwd"?: string;
  checksum?: string;
  "connect-timeout"?: number;
  "dry-run"?: boolean;
  "lowest-speed-limit"?: string;
  "max-connection-per-server"?: number;
  "max-file-not-found"?: number;
  "max-tries"?: number;
  "min-split-size"?: number;
  "netrc-path"?: string;
  "no-netrc"?: boolean;
  "no-proxy"?: string[];
  out?: string;
  "proxy-method"?: "get" | "tunnel";
  "remote-time"?: boolean;
  "reuse-uri"?: boolean;
  "retry-wait"?: number;
  "server-stat-of"?: string;
  "server-stat-if"?: string;
  "server-stat-timeout"?: number;
  split?: number;
  "stream-piece-selector"?: "default" | "inorder" | "random" | "geom";
  timeout?: number;
  "uri-selector"?: "inorder" | "feedback" | "adaptive";
}

export interface HttpOptions extends HttpFtpSftpOptions {
  "ca-certificate"?: string;
  certificate?: string;
  "check-certificate"?: boolean;
  "http-accept-gzip"?: boolean;
  "http-auth-challenge"?: boolean;
  "http-no-cache"?: boolean;
  "http-user"?: string;
  "http-passwd"?: string;
  "http-proxy"?: string;
  "http-proxy-passwd"?: string;
  "http-proxy-user"?: string;
  "https-proxy"?: string;
  "https-proxy-passwd"?: string;
  "https-proxy-user"?: string;
  "private-key"?: string;
  referer?: string;
  "enable-http-keep-alive"?: boolean;
  "enable-http-pipelining"?: boolean;
  header?: string[];
  "load-cookies"?: string;
  "save-cookies"?: string;
  "use-head"?: boolean;
  "user-agent"?: string;
}

export interface FtpSftpOptions extends HttpFtpSftpOptions {
  "ftp-user"?: string;
  "ftp-passwd"?: string;
  "ftp-pasv"?: boolean;
  "ftp-proxy"?: string;
  "ftp-proxy-passwd"?: string;
  "ftp-proxy-user"?: string;
  "ftp-type"?: "binary" | "ascii";
  "ftp-reuse-connection"?: boolean;
  "ssh-host-key-md"?: string;
}

export interface BtMetaOptions extends BasicOptions {
  "select-file"?: string;
  "show-files"?: boolean;
}

export interface BitTorrentOptions extends BtMetaOptions {
  "bt-detach-seed-only"?: boolean;
  "bt-enable-hook-after-hash-check"?: boolean;
  "bt-enable-lpd"?: boolean;
  "bt-exclude-tracker"?: string;
  "bt-external-ip"?: string;
  "bt-force-encryption"?: boolean;
  "bt-hash-check-seed"?: boolean;
  "bt-load-saved-metadata"?: boolean;
  "bt-lpd-interface"?: string;
  "bt-max-open-files"?: number;
  "bt-max-peers"?: number;
  "bt-metadata-only"?: boolean;
  "bt-min-crypto-level"?: "plain" | "arc4";
  "bt-prioritize-piece"?: string;
  "bt-remove-unselected-file"?: boolean;
  "bt-require-crypto"?: boolean;
  "bt-request-peer-speed-limit"?: string;
  "bt-save-metadata"?: boolean;
  "bt-seed-unverified"?: boolean;
  "bt-stop-timeout"?: number;
  "bt-tracker"?: string;
  "bt-tracker-connect-timeout"?: number;
  "bt-tracker-interval"?: number;
  "bt-tracker-timeout"?: number;
  "dht-entry-point"?: string;
  "dht-entry-point6"?: string;
  "dht-file-path"?: string;
  "dht-file-path6"?: string;
  "dht-listen-addr6"?: string;
  "dht-listen-port"?: string;
  "dht-message-timeout"?: number;
  "enable-dht"?: boolean;
  "enable-dht6"?: boolean;
  "enable-peer-exchange"?: boolean;
  "follow-torrent"?: boolean | "mem";
  "index-out"?: string[];
  "listen-port"?: string;
  "max-overall-upload-limit"?: string;
  "max-upload-limit"?: string;
  "peer-id-prefix"?: string;
  "peer-agent"?: string;
  "seed-ratio"?: string;
  "seed-time"?: number;
  "torrent-file"?: string;
}

export interface MetalinkOptions extends BtMetaOptions {
  "follow-metalink"?: boolean | "mem";
  "metalink-base-uri"?: string;
  "metalink-file"?: string;
  "metalink-language"?: string;
  "metalink-location"?: string;
  "metalink-os"?: string;
  "metalink-version"?: string;
  "metalink-preferred-protocol"?: "http" | "https" | "ftp" | "none";
  "metalink-enable-unique-protocol"?: boolean;
}

export interface RPCOptions {
  "enable-rpc"?: boolean;
  pause?: boolean;
  "pause-metadata"?: boolean;
  "rpc-allow-origin-all"?: boolean;
  "rpc-certificate"?: string;
  "rpc-listen-all"?: boolean;
  "rpc-listen-port"?: number;
  "rpc-max-request-size"?: string;
  "rpc-passwd"?: string;
  "rpc-private-key"?: string;
  "rpc-save-upload-metadata"?: boolean;
  "rpc-secret"?: string;
  "rpc-secure"?: boolean;
  "rpc-user"?: string;
}

export interface AdvancedOptions {
  "allow-overwrite"?: boolean;
  "allow-piece-length-change"?: boolean;
  "always-resume"?: boolean;
  "async-dns"?: boolean;
  "async-dns-server"?: string;
  "auto-file-renaming"?: boolean;
  "auto-save-interval"?: number;
  "conditional-get"?: boolean;
  "conf-path"?: string;
  "console-log-level"?: "debug" | "info" | "notice" | "warn" | "error";
  "content-disposition-default-utf8"?: boolean;
  // daemon?: boolean;
  "deferred-input"?: boolean;
  "disable-ipv6"?: boolean;
  "disk-cache"?: string;
  "download-result"?: "default" | "full" | "hide";
  dscp?: number;
  "rlimit-nofile"?: number;
  "enable-color"?: boolean;
  "enable-mmap"?: boolean;
  "event-poll"?: "epoll" | "kqueue" | "port" | "poll" | "select";
  "file-allocation"?: "none" | "prealloc" | "falloc" | "trunc";
  "force-save"?: boolean;
  "save-not-found"?: boolean;
  gid?: string;
  "hash-check-only"?: boolean;
  "human-readable"?: boolean;
  interface?: string;
  "keep-unfinished-download-result"?: boolean;
  "max-download-result"?: number;
  "max-mmap-limit"?: string;
  "max-resume-failure-tries"?: number;
  "min-tls-version"?: "SSLv3" | "TLSv1" | "TLSv1.1" | "TLSv1.2";
  "multiple-interface"?: string;
  "log-level"?: "debug" | "info" | "notice" | "warn" | "error";
  "on-bt-download-complete"?: string;
  "on-download-complete"?: string;
  "on-download-error"?: string;
  "on-download-pause"?: string;
  "on-download-start"?: string;
  "on-download-stop"?: string;
  "optimize-concurrent-downloads"?: boolean | string;
  "piece-length"?: string;
  "show-console-readout"?: boolean;
  stderr?: boolean;
  "summary-interval"?: number;
  "force-sequential"?: boolean;
  "max-overall-download-limit"?: string;
  "max-download-limit"?: string;
  "no-conf"?: boolean;
  "no-file-allocation-limit"?: string;
  "parameterized-uri"?: boolean;
  quiet?: boolean;
  "realtime-chunk-checksum"?: boolean;
  "remove-control-file"?: boolean;
  "save-session"?: string;
  "save-session-interval"?: number;
  "socket-recv-buffer-size"?: string;
  stop?: number;
  "stop-with-process"?: number;
  "truncate-console-readout"?: boolean;
}

export type GlobalOptions = HttpOptions &
  FtpSftpOptions &
  BitTorrentOptions &
  MetalinkOptions &
  RPCOptions &
  AdvancedOptions;
