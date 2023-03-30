import { Link } from 'react-router-dom';
import { Container } from './navBarStyles';
import React from 'react';

export default function NavBar() {
    return(
        <Container>
            <Link to={"/"}>Home</Link>
            <Link to={"/result"}>Result</Link>
        </Container>
    );
}