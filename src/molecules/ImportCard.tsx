import React from "react";

type FeedProps = {
    title: String,
    description: String
};

const ImportCard = ({ title, description }: FeedProps) => {
    return (
        <div>
            <h6>{ title }</h6>
            <p>{ description }</p>
        </div>
    );
}

export default ImportCard;