import styled from "styled-components";



export const Space = styled.div`
display: flex;
height: 150px;
`

export const ShoeContainer = styled.div`
    display: flex;
    padding: 3rem;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;


`

export const ShoeCard = styled.div`

padding: 30px 25px;
background: linear-gradient(to right, rgba(227,177,169,0.41), #ffdde1); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius: 15px;
    text-align: center; 
    border: solid 2px gray;

`
export const ShoeImg = styled.div`


display: flex;
border: solid gray;


`
export const BuyButton = styled.button`
width: 80px;
margin-top: 10px;
padding: 10px;
border: solid gray 1px;
border-radius: 10px;
background-color: #ffdde1;

`

export const ButtonCategories = styled.button`

width: 80px;
margin-top: 10px;
padding: 15px;
border: solid 1px gray;
border-radius: 10px;
background-color: #ffdde1;

`

export const ButtonContainer = styled.div`
display: flex;
justify-content: start;
gap: 8px;
padding-left:13.5%;

`

export const Headline = styled.div`
display: flex;
padding-left: 13.5%;

`