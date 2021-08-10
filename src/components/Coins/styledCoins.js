import styled from 'styled-components'


const CoinContainer = styled.div`
    margin-top:20px;
    display:flex;
    justify-content:center;
    width:100%;
`;

const CoinRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  width: 100%;
  border-bottom:1px solid #9cf23a;
  

  h1{
      font-size:15px;
      width: 150px;
  }
  img{
      width:30px;
      width: 30px;
    margin-right: 10px;
  }

  p{
    text-transform: uppercase;
  }
`

const Coin = styled.div`
     display: flex;
     align-items: center;
     padding-right: 24px;
     min-width: 300px;
     
`


const CoinData =  styled.div`
    display: flex;
    text-align: right;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    p{
        text-align: center;
    }
`

export {CoinContainer, CoinRow, Coin, CoinData} 