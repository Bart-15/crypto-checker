import styled from 'styled-components'

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
    margin-top:100px;
    width:300px;
    padding:0 10px;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    backdrop-filter: blur(1px) saturate(180%);
    height:30px;
    &:focus {
        outline:none;
    }
    
`

export {SearchContainer, Input} 