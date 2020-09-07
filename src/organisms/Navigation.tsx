import React from "react";
import styled from "styled-components";
import history from "../_helpers/history";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHome, faPlus } from "@fortawesome/free-solid-svg-icons";

const NavBar = styled.div`
    background-color: #161A1A;
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
    font-size: 20px;

    .menu {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

const NavBtn = styled.div`
    transition: 0.3s;
    cursor: pointer;
    padding: 5px 0px;
    width: 40px;
    text-align: center;

    &:hover {
        background-color: rgba(100, 100, 100, 0.3);
    }
`;

const Navigation = () => {

    const onRedirect = (link: string) => {
        history.push(link);
    }

    return (
        <NavBar>
            <div style={{ height: "fit-content" }}>
                <FontAwesomeIcon color="white" icon={faCoffee} />
            </div>
            <div className="menu">
                <NavBtn onClick={() => onRedirect("/")}>
                    <FontAwesomeIcon color="white" icon={faHome} />
                </NavBtn>
                <NavBtn onClick={() => onRedirect("/search")}>
                    <FontAwesomeIcon color="white" icon={faPlus} />
                </NavBtn>
            </div>
        </NavBar>
    );
}

export default Navigation;