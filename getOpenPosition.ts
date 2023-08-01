import { client } from "./utils/constant";



(async () => {
	const positions = await	client.getPositions()
	console.log('Positions Deneme Halil Test',positions.filter(item=>item.symbol == "BTCUSDT"))
  })();