import React from 'react'
import {CoinRow, Coin, CoinData} from './styledCoins'
const Coins = ({coin:{ name, image, current_price, symbol, market_cap, price_change_percentage_24h}}) => {
    return <>
       <CoinRow>
           <Coin >
               <img src={image} alt="hello" />
               <h1>{name}</h1>
               <p>{symbol}</p>
           </Coin>
           <CoinData>
            <p>₱{current_price.toLocaleString()}</p>
            <p>Mkt Cap: ₱{market_cap.toLocaleString()}</p>
            <p>{price_change_percentage_24h.toFixed(2)}%</p>
           </CoinData>
       </CoinRow>
    </>     
    
}

export default Coins
