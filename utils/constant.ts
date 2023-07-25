import { USDMClient, NewFuturesOrderParams, MarkPrice } from "binance";

const testnet = true;
const baseUrl = testnet
  ? "https://testnet.binancefuture.com"
  : "https://api.binance.com";
export const client = new USDMClient({
  api_key: "6522dba195264b2a747255c4eb0c2a0819347eea7279e9cebf3e4cc68fcd9bbf", //process.env["BINANCE_API_KEY"],
  api_secret:
    "e960984f5431757c3c9b1cb63695ed5eeb585dba300f2b1dcee8fa60a5aa7a92", // process.env["BINANCE_API_SECRET"],
  baseUrl,
});
