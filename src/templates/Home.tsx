import React from "react";
import {useQuery} from "@apollo/client";
import {GET_ALL_ARTICLES} from "../apollo/article/actions";
import Feed from "../organisms/Feed";

const Home = () => {
    const { loading, data } = useQuery(GET_ALL_ARTICLES);

    if (loading) {
        return <p>
            Loading
        </p>;
    }
    if (!data) {
        return <p>
            Error
        </p>;
    }

    return (
        <div>
            <Feed feed={data.articles}/>
        </div>
    );
}

export default Home;