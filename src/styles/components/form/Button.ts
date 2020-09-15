import styled from "styled-components";

const StyledButton = styled.button`
    position: relative;
    border: none;
    margin: 5px;
    border-radius: 3px;
    display: block;
    width: 100%;
    padding: 10px;
    background-color: ${({theme}) => theme.primaryColor};
    color: white;
    font-weight: 600;

    .button-alt-text {
        transition: 0.2s;
        position: absolute;
        top: 100%;
        left: 0;
        font-size: 13px;
        font-weight: 500;
        color: ${({theme}) => theme.primaryColor};

        &:hover {
            color: white;
        }
    }
`;

export default StyledButton;