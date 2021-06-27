import React from "react";
import HomeTemplate from "../templates/Home";
import Navigation from "../organisms/Navigation";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ACTIVE_SEARCH } from "../apollo/system/actions";
import Viewer from "../organisms/Viewer";

interface ParamTypes {
  articleId: string;
}

const Home = () => {
  const { articleId } = useParams<ParamTypes>();
  const { loading, data } = useQuery(ACTIVE_SEARCH);

  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div>
      <Navigation articleId={articleId} />
      <HomeTemplate search={data.search} />
      <Viewer id={articleId} />
    </div>
  );
};

export default Home;
