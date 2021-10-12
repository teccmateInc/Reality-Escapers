
import styled from 'styled-components'
import { NavLink as Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
background-color: white;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem 2rem;
box-shadow: 2px 2px 4px 5px #ccc;
`;

export const NavLink = styled(Link)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1em;
height: 100%;
cursor: pointer;
&.active{
    color: #3580db
;
}
`
export const H2 = styled.h2`
&:hover{
    color: #3580db
}
`
export const Bars = styled(FaBars)`
display: none;

@media screen and (max-width: 768px){
color: black;
display: block;
position: absolute;
top: 0;
right: 0;
transform: translate(-100%,75%);
font-size: 1.8rem;
cursor: pointer;
}
`

export const NavMenu = styled.div`

`
