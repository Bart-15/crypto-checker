import React, {useState, useEffect} from 'react'
import './index.css'
import {Container} from '@material-ui/core'
import Coins from './components/Coins/Coins'
import Search from '../src/components/Search/Search'
import {CoinContainer} from '../src/components/Coins/styledCoins'
import axios from 'axios'
const App = () => {

    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=10&page=1&sparkline=false'


    //Fetch crypto coin data
    const getCoin  = async () => {
        const data =  axios.get(url);
        return data;
    }


    const handleSearch = e => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        getCoin().then((res) =>{
            setCoins(res.data)
            console.log(res.data)
        }).catch(err => console.log(err))
    },[]);

    //filter search results
    const filteredCoins = coins.filter(coin =>
         coin.name.toLowerCase().includes(search.toLowerCase())
    );
    
    console.log(search)
    return <>
        <Container>
          <Search handleSearch={handleSearch} />
                {
                    filteredCoins.map((coin, id) => {

                        return <CoinContainer><Coins key={id} coin={coin}/></CoinContainer> 
                    })
                }
        </Container>
    </>
}

export default App
