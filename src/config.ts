import "module-alias/register";
import { readFileSync, existsSync } from "fs";
import dotenv from "dotenv";
dotenv.config();

// Exports
export default {
  version: 1.0,
  node_env: (process.env.NODE_ENV ?? "dev") as "dev" | "prod",

  server: {
    port: envNum("PORT", 3000),
    ssl_cert: loadFile(process.env.SSL_CRT),
    ssl_key: loadFile(process.env.SSL_KEY),
  },
};

// Methods & types

function envNum(key: string, default_val: number): number {
  const buffer = process.env[key] ?? default_val;
  const value: number = +buffer;

  return value;
}

function loadFile(path: string | undefined): string | undefined {
  return path != undefined && existsSync(path)
    ? readFileSync(path, "utf-8")
    : undefined;
}
