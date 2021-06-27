import React from "react";
import HomeTemplate from "../templates/Home";
import Navigation from "../organisms/Navigation";
import { useQuery } from "@apollo/client";
import { ACTIVE_SEARCH } from "../apollo/system/actions";

const Home = () => {
  const { loading, data } = useQuery(ACTIVE_SEARCH);

  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div>
      <Navigation />
      <HomeTemplate search={data.search} />
    </div>
  );
};

export default Home;
