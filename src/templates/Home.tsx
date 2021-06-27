import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_ALL_ARTICLES, SEARCH_ARTICLES } from "../apollo/article/actions";
import Feed from "../organisms/Feed";
import Viewer from "../organisms/Viewer";
import SearchBar from "../organisms/SearchBar";
// import { IArticle } from "../apollo/article/interface";

type Search = {
  query: string;
  tags: [string];
};

type HomeProps = {
  search: Search;
};

const Home = ({ search }: HomeProps) => {
  const [loadAll, { loading, data }] = useLazyQuery(GET_ALL_ARTICLES);
  const [loadSearch, SearchResult] = useLazyQuery(SEARCH_ARTICLES, {
    variables: {
      search: search.query,
    },
  });

  // const [selection, setSelection] = useState<undefined | IArticle>();

  useEffect(() => {
    // const query = new URLSearchParams(window.location.search);
    // console.log(query.get('view'));
    if (search.query) {
      loadSearch();
    } else {
      loadAll();
    }
  }, [search, loadAll, loadSearch]);

  if (loading || SearchResult.loading) {
    return <p>Loading</p>;
  }
  if ((!search.query && !data) || (search.query && !SearchResult.data)) {
    return <p>Error</p>;
  }

  return (
    <div
      style={{
        marginTop: 100,
      }}
    >
      <SearchBar />
      <Feed
        feed={search.query ? SearchResult.data.searchArticles : data.articles}
      />
      <Viewer />
    </div>
  );
};

export default Home;
