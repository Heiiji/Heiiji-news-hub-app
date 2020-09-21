import React, { useState } from "react";
import {useQuery} from "@apollo/client";
import {GET_ALL_ARTICLES} from "../apollo/article/actions";
import Feed from "../organisms/Feed";
import Viewer from "../organisms/Viewer";
import { IArticle } from "../apollo/article/interface";

const Home = () => {
    const { loading, data } = useQuery(GET_ALL_ARTICLES);
    const [selection, setSelection] = useState<undefined | IArticle>();

    const onSelect = (news: IArticle) => {
        setSelection(news);
    }

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
            <Feed onSelect={onSelect} feed={data.articles}/>
            {
                selection && <Viewer article={selection} />
            }
        </div>
    );
}

export default Home;