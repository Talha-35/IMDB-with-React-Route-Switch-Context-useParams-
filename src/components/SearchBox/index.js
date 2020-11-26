import React ,{useRef ,useContext} from 'react'
import {MovieContext} from '../../Movie';
import {StyledSearchButton , StyledSearchWrapper , StyledSearchInput} from './SearchBox.style';



export const SearchBox = () => {    

    const {setSearchKey} = useContext(MovieContext);
    const inputRef = useRef();

    return (
        <StyledSearchWrapper>
            <StyledSearchInput 
            ref={inputRef}
            color='#1f1f1f' 
            isColored={false} 
         />
            {/* // yukardaki e kısaltması event dan gelmektedir */}
            <StyledSearchButton onClick={() => setSearchKey(inputRef?.current.value)} >Search</StyledSearchButton>
            
        </StyledSearchWrapper>
    )
}

 
