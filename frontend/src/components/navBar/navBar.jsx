import { Link } from "react-router-dom";
import { Container, MenuContainer, Logo, NavMenu } from "./navBarStyles";
import React from "react";

export default function NavBar() {
  return (
    <Container>
      <MenuContainer>
        <Logo>
          <Link to={"/"}>Home</Link>
        </Logo>
        <NavMenu>
          <li>
            <Link to={"/result"}>Result</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </NavMenu>
      </MenuContainer>
    </Container>
  );
}
