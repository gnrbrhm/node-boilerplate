import { client } from "./utils/constant";



(async () => {
	const positions = await	client.getPositions()
<<<<<<< HEAD
	console.log('Positions Deneme Halil Test',positions.filter(item=>item.symbol == "BTCUSDT"))
=======
	console.log('Positions Deneme Halil',positions.filter(item=>item.symbol == "BTCUSDT"))
>>>>>>> f7b1462f262241e4f88210ba55c97f3369afa3c1
  })();