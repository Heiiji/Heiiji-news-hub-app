import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const NavBar = styled.div`
    background-color: #121212;
    width: 40px;
    position: fixed;
    flex-direction: column;
    padding: 10px 0px;
    top: 0;
    left: 0;
    height: 100%;
    box-shadow: 0 0 3px black;
    display: flex;
    align-items: center;
`;

const Navigation = () => {
    return (
        <NavBar>
            <FontAwesomeIcon color="white" icon={faCoffee} />
        </NavBar>
    );
}

export default Navigation;