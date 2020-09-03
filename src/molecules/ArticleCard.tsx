import React from "react";
import {IArticle} from "../apollo/article/interface";
import styled from "styled-components";

const Article = styled.a`
    transition: 0.3s;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    border: 1px solid rgba(10, 10, 10, 0.2);
    border-radius: 10px;
    overflow: hidden;
    width: 90%;
    max-width: 800px;
    margin: 10px;
    text-decoration: none !important;
    img {
        object-fit: cover;
        height: auto;
    };
    .description {
        text-align: left;
        padding: 10px; 
        p {
            color: rgb(220, 220, 220);
        }
    }
    &:hover {
        box-shadow: 0 0 5px rgba(10, 10, 10, 0.2);
    }
`;

type ArticleCardProps = {
    article: IArticle
};

const ArticleCard = ({ article }: ArticleCardProps) => {
    return (
        <Article href={article.url} target="_blank">
            <img alt="illustration" src={article.image} width={100} />
            <div className="description">
                <h5>{article.title}</h5>
                <p>{article.description.length <= 150 ? article.description : article.description.substring(0, 150) + "..."}</p>
            </div>
        </Article>
    );
}

export default ArticleCard;