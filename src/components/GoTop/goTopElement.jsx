import styled from 'styled-components'
import {BiArrowFromBottom} from 'react-icons/bi'



export const ScrollToTop = styled(BiArrowFromBottom)`
    display: block;
    position: fixed;
    background: white;
    box-shadow: 2px 2px 5px rgba(252, 248, 241, 0.8); 
    width: 30px;
    height: 30px;
    border-radius: 25px;
    bottom: 3%;
    left: 95%;
    cursor: pointer;
    text-align: center;
    font-size: 5rem;
    line-height: 30px;

    @media screen and (max-width: 820px){
        left: 90%;
    }
    
    @media screen and (max-width: 400px) {
        width: 25px;
        height: 25px;
    }

    &:hover {
        transform: scale(1.1)
    }

 
`

