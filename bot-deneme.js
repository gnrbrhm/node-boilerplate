console.log("Merhaba Dünya");
const Binance = require("node-binance-api");
const binance = new Binance().options({
  //   APIKEY: "JCHdFxHVbNbCf77NSABl3uO5RvBDeUYKcepMYlkFmA5WGAh1M6bdnWAZIZuHF2aq",
  APIKEY: "6522dba195264b2a747255c4eb0c2a0819347eea7279e9cebf3e4cc68fcd9bbf",
  //   APISECRET: "BKiYYnZAtNCCgzIqmOwU95x5nDpOTuCyzotVDPNlBKNeERtiQMkyXHemx26PnqAn",
  APISECRET: "e960984f5431757c3c9b1cb63695ed5eeb585dba300f2b1dcee8fa60a5aa7a92",
  verbose: true,
  useServerTime: true,
  recvWindow: 30000,
  test: true,
  //   urls: {
  //     base: "https://testnet.binance.vision/api/",
  //     combineStream: "wss://testnet.binance.vision/stream?streams=",
  //     stream: "wss://testnet.binance.vision/ws/",
  //   },
});
// console.log(binance);
/**WORKED */

// binance.prices(function (error, ticker) {
//   console.log("prices()", ticker);
//   console.log("Price of BNB: ", ticker.BNBUSDT);
// });

// (async () => {
//   binance.useServerTime();
//   let balance = await binance.futuresBalance();
//   console.log(balance);
// })();

// async () => {
//   binance.useServerTime();

//   console.log("order:");
//   let order = await binance.futuresBuy("BTCUSDT", 0.00001, 31000);
//   console.log("order:", order);
// };

/**WORKED */

// binance.websockets.depthCache(["KAVABTC"], function (symbol, depth) {
//   let max = 10; // Show 10 closest orders only
//   let bids = binance.sortBids(depth.bids, max);
//   let asks = binance.sortAsks(depth.asks, max);
//   console.log(symbol + " depth cache update");
//   console.log("asks", asks);
//   console.log("bids", bids);
//   console.log("ask: " + binance.first(asks));
//   console.log("bid: " + binance.first(bids));
// });

//Placing a LIMIT order
//binance.buy(symbol, quantity, price);
//binance.sell("ETHBTC", 1, 0.069);
// console.info(
//   binance.futuresPrices().then((res) => {
//     console.log(res);
//   })
// );
// console.info(
//   binance.futuresBuy("BTCUSDT", 0.1, 32000).then((res) => {
//     console.log(res);
//   })
// );

async () => {};
console.info(await binance.futuresTime());
console.info(await binance.futuresExchangeInfo());
console.info(await binance.futuresCandles("TRXUSDT", "1m"));
console.info(await binance.futuresDepth("ADAUSDT"));
console.info(await binance.futuresQuote());
console.info(await binance.futuresQuote("BCHUSDT"));
console.info(await binance.futuresDaily());
console.info(await binance.futuresOpenInterest("BTCUSDT"));
console.info(await binance.futuresMarkPrice());
console.info(await binance.futuresMarkPrice("ETHUSDT"));
console.info(await binance.futuresTrades("LTCUSDT"));
console.info(await binance.futuresAggTrades("XTZUSDT"));
console.info(await binance.futuresLiquidationOrders());
console.info(await binance.futuresFundingRate());
console.info(await binance.futuresHistoricalTrades("XMRUSDT"));
console.info(await binance.futuresLeverageBracket("LINKUSDT"));
console.info(await binance.futuresIncome());
console.info(await binance.futuresCancelAll("BTCUSDT"));
console.info(await binance.futuresCancel("BTCUSDT", { orderId: "1025137386" }));
console.info(await binance.futuresCountdownCancelAll("BTCUSDT", 45000));
console.info(
  await binance.futuresOrderStatus("BTCUSDT", { orderId: "1025137386" })
);
console.info(await binance.futuresOpenOrders());
console.info(await binance.futuresOpenOrders("BTCUSDT"));
console.info(await binance.futuresAllOrders());
console.info(await binance.futuresAllOrders("BTCUSDT"));
console.info(await binance.futuresUserTrades("BTCUSDT"));
console.info(await binance.futuresGetDataStream());
console.info(await binance.futuresPositionMarginHistory("TRXUSDT"));
console.info(await binance.promiseRequest("v1/time"));
// Batch orders, remaining WebSocket streams, and better documentation will be come later
