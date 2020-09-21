import React from "react";
import styled from "styled-components";
import { IArticle } from "../apollo/article/interface";

const StyledViewer = styled.div`
    padding-top: 100px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

type ViewerProps = {
    article: IArticle
};

const Viewer = ({ article }: ViewerProps) => {
    return (
        <div>
            <iframe id="inlineFrameExample"
                title="viewer"
                width="300"
                height="200"
                src={article.url}>
            </iframe>
        </div>
    );
}

export default Viewer;