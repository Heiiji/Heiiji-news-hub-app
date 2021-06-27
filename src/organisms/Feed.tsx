import React from "react";
import { IArticle } from "../apollo/article/interface";
import ArticleCard from "../molecules/ArticleCard";
import styled from "styled-components";
import VerboseArticleCard from "../molecules/VerboseArticleCard";

const StyledFeed = styled.div`
  padding-top: 100px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

type FeedProps = {
  feed: Array<IArticle>;
};

const Feed = ({ feed }: FeedProps) => {
  return (
    <StyledFeed>
      {feed.map((article) =>
        article.image ? (
          <ArticleCard key={article.title + article.url} article={article} />
        ) : (
          <VerboseArticleCard
            key={article.title + article.url}
            article={article}
          />
        )
      )}
    </StyledFeed>
  );
};

export default Feed;
