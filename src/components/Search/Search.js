import React from 'react'
import { SearchContainer, Input } from './searchStyled'
const Search = ({handleSearch}) => {
    return<>
        <SearchContainer>
            <Input type="text" placeholder="Search" onChange={handleSearch}/>
        </SearchContainer>
    </>
}

export default Search
