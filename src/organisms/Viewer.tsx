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
        position: relative;
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        z-index: 2;
    }
    .toolbar {
        position: absolute;
        top: 0;
        height:20px;
        background-color: white;
        right: 10px;
    }

    .spinner-border {
        z-index: 1;
        position: relative;
        top: 49%;
        left: 49%;
    }

    @media screen and (max-width: 1000px) {
        padding: 0px;
        iframe {
            width: 100%;
            height: 100%;
        }
    }
`;

type ViewerProps = {
    article: IArticle,
    onClose: Function
};

const Viewer = ({ article, onClose }: ViewerProps) => {
    return (
        <StyledViewer onClick={() => onClose()}>
            <div className="spinner-border text-primary" role="status"></div>
            <div onClick={ev => ev.stopPropagation()} className="toolbar">
                <button onClick={() => onClose()}>X</button>
            </div>
            <iframe onClick={ev => ev.stopPropagation()} id="inlineFrameExample"
                title="viewer"
                src={article.url}>
            </iframe>
        </StyledViewer>
    );
}

export default Viewer;