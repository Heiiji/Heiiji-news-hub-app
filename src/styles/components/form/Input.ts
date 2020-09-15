import styled from "styled-components";

const StyledInput = styled.input`
    background-color: #282834;
    border-radius: 3px;
    border: none;
    padding: 10px 15px;
    color: rgba(240, 240, 240, 0.9);
    width: 100%;
    display: block;
    margin: 5px;

    &:active {
        border: 1px solid rgba(200, 200, 200, 0.8);
    }
    &:focus {
        border: 1px solid rgba(200, 200, 200, 0.8);
    }
`;

export default StyledInput;