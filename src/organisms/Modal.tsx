import React from "react";
import styled from "styled-components";

interface IStyledProps {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  active: Boolean;
}

const StyledModal = styled.div.attrs<IStyledProps>(({ onClick }) => ({
  onClick: onClick,
}))<IStyledProps>`
  transition: 0.4s;
  z-index: 1;
  cursor: default;
  background-color: ${({ theme }) => theme.secondaryColor};
  transform: ${(props) => (props.active ? "scale(1)" : "scale(0.8)")};
  border-radius: 20px;
  min-width: 500px;

  h2 {
    border-bottom: 1px solid white;
    padding: 20px 20px 10px 20px;
  }

  .corpus {
    padding: 10px 20px 20px 20px;
  }
`;

const BackgroundModal = styled.div.attrs<IStyledProps>(({ onClick }) => ({
  onClick: onClick,
}))<IStyledProps>`
  transition: 0.4s;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: ${(props) => (props.active ? "1" : "0")};
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledContainer = styled.div<IStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: ${(props) => (props.active ? "0" : "-200%")};
  left: 0;
  width: 100%;
  height: 100%;
`;

type ModalProps = {
  title: String;
  children: any;
  toggle: Function;
  active: Boolean;
};

const Modal = ({ children, title, toggle, active }: ModalProps) => {
  return (
    <StyledContainer active={active} onClick={() => toggle()}>
      <BackgroundModal active={active} onClick={() => toggle()} />
      <StyledModal active={active} onClick={(ev) => ev.stopPropagation()}>
        <h2>{title}</h2>
        <div className="corpus">{children}</div>
      </StyledModal>
    </StyledContainer>
  );
};

export default Modal;
