import styled from "styled-components";

export const NavbarContainer = styled.div`
/* height: 47px; */
display: flex;
width: 100%;
position: fixed;
justify-content: space-around;
align-items: center;
padding: 1rem;
background-color: black;
color: white;
@media (max-width: 1551px) {
    padding: 1rem 2rem;
    justify-content: center;
    gap: 40px;

  }

`

export const NavbarLinks = styled.div`
display: flex;
gap: 20px;
padding: 15px;
color: white;

`


export const NavbarLinksContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: white;


`


