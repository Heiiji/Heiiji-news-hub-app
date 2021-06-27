import React, { useState } from "react";
import styled from "styled-components";
import history from "../_helpers/history";
import { useQuery } from "@apollo/client";
import Auth from "./Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faHome,
  faDoorOpen,
  faUserCircle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { IS_LOGGED_IN } from "../apollo/user/actions";

const NavBar = styled.div`
  background-color: #161a1a;
  width: 40px;
  position: fixed;
  flex-direction: column;
  padding: 10px 12px;
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
  padding: 5px 12px;
  width: 40px;
  text-align: center;

  &:hover {
    background-color: rgba(100, 100, 100, 0.3);
  }
`;

interface NavigationProps {
  articleId?: string;
}

const Navigation = ({ articleId }: NavigationProps) => {
  const [auth, setAuth] = useState(false);
  const logged = useQuery(IS_LOGGED_IN);

  if (logged.loading) {
    return <p> loading</p>;
  }

  const onRedirect = (link: string) => {
    history.push(link);
  };

  const onLoggout = () => {
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  return (
    <>
      <NavBar>
        <div style={{ height: "fit-content" }}>
          <FontAwesomeIcon color="white" icon={faCoffee} />
        </div>
        <div className="menu">
          <NavBtn onClick={() => onRedirect("/")}>
            <FontAwesomeIcon color="white" icon={faHome} />
          </NavBtn>
          {articleId && (
            <NavBtn onClick={() => onRedirect("/")}>
              <FontAwesomeIcon color="white" icon={faDoorOpen} />
            </NavBtn>
          )}
        </div>
        {logged.data.isLoggedIn ? (
          <div
            onClick={onLoggout}
            style={{ height: "fit-content", cursor: "pointer" }}
          >
            <FontAwesomeIcon color="white" icon={faSignOutAlt} />
          </div>
        ) : (
          <div
            onClick={() => setAuth(!auth)}
            style={{ height: "fit-content", cursor: "pointer" }}
          >
            <FontAwesomeIcon color="white" icon={faUserCircle} />
          </div>
        )}
      </NavBar>
      <Auth active={auth} toggle={() => setAuth(!auth)} />
    </>
  );
};

export default Navigation;
