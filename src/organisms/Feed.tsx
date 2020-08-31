import React from "react";
import {IArticle} from "../apollo/article/interface";
import ArticleCard from "../molecules/ArticleCard";
import styled from "styled-components";

const StyledFeed = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

type FeedProps = {
    feed: Array<IArticle>
};

const Feed = ({ feed }: FeedProps) => {
    return (
        <StyledFeed>
            {
                feed.map((article) => <ArticleCard key={article.title + article.url} article={article} />)
            }
        </StyledFeed>
    );
}

export default Feed;