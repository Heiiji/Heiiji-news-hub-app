import React from "react";
import styled from "styled-components";

interface IStyledProps {
    onClick: () => void
}

const StyledImportCard = styled.div.attrs<IStyledProps>(({onClick}) => ({
    onClick: onClick
}))<IStyledProps>`
    transition: 0.3s;
    display: inline-block;
    border: 1px solid rgba(0, 0, 0, 0.6);
    padding: 15px;
    margin: 15px;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
        background-color: rgba(100, 100, 100, 0.1);
    }
`;

type ImportCardProps = {
    title: String,
    description: String,
    onClick: () => void
};

// TODO : switch to styled with onClick parsing ....

const ImportCard = ({ title, description, onClick }: ImportCardProps) => {
    return (
        <StyledImportCard onClick={onClick}>
            <h6>{ title }</h6>
            <p>{ description }</p>
        </StyledImportCard>
    );
}

export default ImportCard;