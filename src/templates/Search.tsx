import React from "react";
import ImportThread from "../organisms/ImportThread";
import styled from "styled-components";

const StyledSearch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 30px;

    .corpus {
        display: flex;
        flex-direction: column;
        flex: 0.5;
        min-width: 500px;
        max-width: 80%;
    }
`;

const Search = () => {
    return (
        <StyledSearch>
            <div className="corpus">
                <ImportThread/>
            </div>
        </StyledSearch>
    );
}

export default Search;