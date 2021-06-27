import React from "react";
import { IArticle } from "../apollo/article/interface";
import styled from "styled-components";
import history from "../_helpers/history";

const VerboseArticle = styled.div`
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  width: 500px;
  margin: 10px;
  text-decoration: none !important;
  background-color: #2b374a;
  h5 {
    color: ${({ theme }) => theme.primaryColor};
  }
  .description {
    text-align: left;
    padding: 15px;
    height: 180px;
    overflow: hidden;
    p {
      color: rgb(220, 220, 220);
    }
  }
  &:hover {
    box-shadow: 0 0 10px rgba(10, 10, 10, 0.8);
  }
`;

type VerboseArticleCardProps = {
  article: IArticle;
  onSelect?: Function;
};

const VerboseArticleCard = ({ article, onSelect }: VerboseArticleCardProps) => {
  const milliseconds = article.date; // 1575909015000

  const dateObject = new Date(milliseconds);

  const humanDateFormat = dateObject.toLocaleString();

  const _onClick = () => {
    const id = article.id;
    history.push(`/article/${id}`);
    if (onSelect) {
      onSelect(article);
    }
  };

  return (
    <VerboseArticle onClick={_onClick}>
      <div className="description">
        <h5>{article.title}</h5>
        <small>{humanDateFormat}</small>
        <p>
          {article.description.length <= 150
            ? article.description
            : article.description.substring(0, 150) + "..."}
        </p>
      </div>
    </VerboseArticle>
  );
};

export default VerboseArticleCard;
