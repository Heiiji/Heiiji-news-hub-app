import React from "react";
import {IArticle} from "../apollo/article/interface";
import styled from "styled-components";

const Article = styled.div`
    transition: 0.3s;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    overflow: hidden;
    width: 90%;
    max-width: 800px;
    margin: 10px;
    text-decoration: none !important;
    background-color: #2B374A;
    h5 {
        color: ${({ theme }) => theme.primaryColor};
    }
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
        box-shadow: 0 0 10px rgba(10, 10, 10, 0.8);
    }
`;

type ArticleCardProps = {
    article: IArticle,
    onSelect: Function
};

const ArticleCard = ({ article, onSelect }: ArticleCardProps) => {
    return (
        <Article onClick={() => onSelect(article)}>
            <img alt="illustration" src={article.image ? article.image : "/media/images/rss.png"} width={100} />
            <div className="description">
                <h5>{article.title}</h5>
                <p>{article.description.length <= 150 ? article.description : (article.description.substring(0, 150) + "...")}</p>
            </div>
        </Article>
    );
}

export default ArticleCard;