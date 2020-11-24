import React, { useState, useEffect } from "react";
import {useQuery} from "@apollo/client";
import {GET_ALL_ARTICLES} from "../apollo/article/actions";
import Feed from "../organisms/Feed";
import Viewer from "../organisms/Viewer";
import { IArticle } from "../apollo/article/interface";

const Home = () => {
    const { loading, data } = useQuery(GET_ALL_ARTICLES);
    const [selection, setSelection] = useState<undefined | IArticle>();

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        console.log(query.get('view'));
      }, []);

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
            <Viewer/>
        </div>
    );
}

export default Home;