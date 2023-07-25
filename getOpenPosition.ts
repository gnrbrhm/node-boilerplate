import { client } from "./utils/constant";



(async () => {
	const positions = await	client.getPositions()
	console.log('Positions',positions.filter(item=>item.symbol == "BTCUSDT"))
  })();