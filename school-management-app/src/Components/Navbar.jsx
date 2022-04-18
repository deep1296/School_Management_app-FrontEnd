import {Link,Route} from 'react-router-dom';
import styled from "styled-components";

const NavbarDiv = styled.div`
    height: 50px;
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #f1f1f1;
    font-size: 20px;
    font-weight: 600;
`;

export const Navbar = () => {
    return (
        <NavbarDiv>
            <Link style={{textDecoration: "none", color:"#f1f1f1"}} to="/">Home</Link>
            {/* <Link to="/" style={{textDecoration: "none", color:"#f1f1f1"}}>Create Todo</Link> */}
            <Link to="/register" style={{textDecoration: "none", color:"#f1f1f1"}}>Registration</Link>
            <Link to="/login" style={{textDecoration: "none", color:"#f1f1f1"}}>LogIn</Link>
        </NavbarDiv>
    )
}