import { client } from "./utils/constant";



(async () => {
	const positions = await	client.getPositions()
	console.log('Positions Birol Test 2',positions.filter(item=>item.symbol == "BTCUSDT"))
  })();