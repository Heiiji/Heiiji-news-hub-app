import React, { useState } from "react";
import StyledInput from "../styles/components/form/Input";
import StyledButton from "../styles/components/form/Button";
import styled from "styled-components";

interface IStyledProps {
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
    active: Boolean
}

const StyledModal = styled.div.attrs<IStyledProps>(({onClick}) => ({
    onClick: onClick
}))<IStyledProps>`
    transition: 0.4s;
    z-index: 1;
    cursor: default;
    background-color: ${(({theme}) => theme.secondaryColor)};
    transform: ${((props) => props.active ? "scale(1)" : "scale(0.8)")};
    border-radius: 20px;
    min-width: 400px;
    text-align: center;

    h3 {
        padding: 20px 20px 10px 20px;
    }

    .corpus {
        padding: 10px 20px 20px 20px;
    }
`;

const BackgroundModal = styled.div.attrs<IStyledProps>(({onClick}) => ({
    onClick: onClick
}))<IStyledProps>`
    transition: 0.4s;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: ${(props) => props.active ? '1' : '0'};
    background-color: rgba(0, 0, 0, 0.5);
`;

const StyledContainer = styled.div<IStyledProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: ${(props) => props.active ? '0' : '-200%'};
    left: 0;
    width: 100%;
    height: 100%;
`;

type AuthProps = {
    toggle: Function,
    active: Boolean
};

const Auth = ({ toggle, active }: AuthProps) => {
    const [hasAccount, setHasAccount] = useState(true);

    const switchHasAccount = (ev: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        if (ev) {
            ev.preventDefault();
        }
        setHasAccount(!hasAccount);
    }

    return (
        <StyledContainer active={active} onClick={() => toggle()}>
            <BackgroundModal active={active} onClick={() => toggle()}/>
            <StyledModal active={active} onClick={(ev) => ev.stopPropagation()}>
                <h3>{ hasAccount ? "CONNECTION" : "SIGNUP" }</h3>
                {
                    hasAccount ?
                    <form className="corpus">
                        <StyledInput type="text" placeholder="Email adress" className="my-3" />
                        <StyledInput type="password" placeholder="Password" className="my-3" />
                        <StyledButton className="my-3">
                            LOGIN
                            <span className="button-alt-text" onClick={switchHasAccount}>Céer un compte</span>
                        </StyledButton>
                    </form> :
                    <form className="corpus">
                        <StyledInput type="text" placeholder="Email adress" className="my-3" />
                        <StyledInput type="password" placeholder="Password" className="my-3" />
                        <StyledInput type="password" placeholder="Confirm password" className="my-3" />
                        <StyledButton className="my-3">
                            REGISTER
                            <span className="button-alt-text" onClick={switchHasAccount}>Se connecter</span>
                        </StyledButton>
                    </form>
                }
            </StyledModal>
        </StyledContainer>
    );
}

export default Auth;