import { client } from "./utils/constant";



(async () => {
	const leverageParams : any = {symbol:"ETHUSDT",leverage:20}
	const leverageResult = await client.setLeverage(leverageParams)
	console.log('Result',leverageResult)
  })();