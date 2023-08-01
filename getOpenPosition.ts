import { client } from "./utils/constant";



(async () => {
	const positions = await	client.getPositions()
	console.log('Positions Deneme Halil',positions.filter(item=>item.symbol == "BTCUSDT"))
  })();