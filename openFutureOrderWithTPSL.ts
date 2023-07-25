import { client } from "./utils/constant";
import { NewFuturesOrderParams } from "binance";

const symbol = 'BTCUSDT';

// submit a 1:1 bracket market buy order with market entry order
(async () => {
  try {
    // TODO: check balance and do other validations

    const assetPrices:any = await client.getMarkPrice({
      symbol:symbol
    })
	console.log('Asset Prices',assetPrices['markPrice'])
	const markPrice :any = assetPrices['markPrice']
    const stopLossPrice = Number(markPrice * 99.5 / 100).toFixed(2)
    const takeProfitPrice = Number(markPrice * 100.5 / 100).toFixed(2)
	console.log('markPrice',markPrice)
	console.log('stopLossPrice',stopLossPrice)
	console.log('takeProfitPrice',takeProfitPrice)

    // create three orders
    // 1. entry order (GTC),
    // 2. take profit order (GTE_GTC),
    // 3. stop loss order (GTE_GTC)

    const entryOrder: NewFuturesOrderParams<string> = {
      positionSide: "BOTH",
      quantity: "0.01",
      reduceOnly: "false",
      side: "BUY",
      symbol: symbol,
      type: "MARKET",
    };

    const takeProfitOrder: NewFuturesOrderParams<string> = {
      positionSide: "BOTH",
      priceProtect: "TRUE",
      quantity: "0.01",
      side: "SELL",
      stopPrice: takeProfitPrice,
      symbol: symbol,
      timeInForce: "GTE_GTC",
      type: "TAKE_PROFIT_MARKET",
      workingType: "MARK_PRICE",
      closePosition: "true"
    };

    const stopLossOrder: NewFuturesOrderParams<string> = {
      positionSide: "BOTH",
      priceProtect: "TRUE",
      quantity: "0.01",
      side: "SELL",
      stopPrice: stopLossPrice,
      symbol: symbol,
      timeInForce: "GTC",
      type: "STOP_MARKET",
      workingType: "MARK_PRICE",
      closePosition: "true"
    };

    const openedOrder = await client.submitMultipleOrders(
		[entryOrder, takeProfitOrder, stopLossOrder])
      .catch(e => console.log(e?.body || e));
    console.log(openedOrder);
  } catch (e) {
    console.log(e);
  }
})();