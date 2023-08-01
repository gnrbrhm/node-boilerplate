import { client } from "./utils/constant";



(async () => {
	const positions = await	client.getPositions()
	console.log('Positions Deneme Halil Test 2',positions.filter(item=>item.symbol == "BTCUSDT"))
  })();