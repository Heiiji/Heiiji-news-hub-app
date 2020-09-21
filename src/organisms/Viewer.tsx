import React from "react";
import styled from "styled-components";
import { IArticle } from "../apollo/article/interface";

const StyledViewer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px;
    height: 100%;
    width: 100%;
    background-color: rgba(10, 10, 10, 0.8);

    iframe {
        width: calc(100% - 20px);
        height: calc(100% - 20px);
    }
`;

type ViewerProps = {
    article: IArticle
};

const Viewer = ({ article }: ViewerProps) => {
    return (
        <StyledViewer>
            <iframe id="inlineFrameExample"
                title="viewer"
                src={article.url}>
            </iframe>
        </StyledViewer>
    );
}

export default Viewer;