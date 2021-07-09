import React from "react";
import { IThread } from "../apollo/thread/interface";
import styled from "styled-components";

const StyledThreadList = styled.div`
  padding-top: 100px;
  text-align: center;
  align-items: center;

  .thread {
    padding: 10px;
    margin: 10px 50px;
    text-align: left;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    background-color: rgba(10, 10, 10, 0.2);
    border-radius: 10px;
    .mainline {
      padding-bottom: 10px;
    }
    img {
      float: left;
      height: 50px;
      margin: 0 10px 0 0;
    }
    .thread-name {
      font-size: 1.2em;
      display: block;
    }
    .thread-url {
      transition: 0.3s;
      text-decoration: none;
      color: aliceblue;
      :hover {
        color: grey;
      }
    }
  }
`;

type FeedProps = {
  threads: Array<IThread>;
};

const ThreadList = ({ threads }: FeedProps) => {
  return (
    <StyledThreadList>
      <h1>Sources list</h1>
      {threads.map((thread) => (
        <div className="thread">
          <div className="mainline">
            {thread.image && <img alt="illustration" src={thread.image} />}
            <span className="thread-name">{thread.name}</span>
            <a
              className="thread-url"
              target="_blank"
              href={thread.domain}
              rel="noreferrer"
            >
              {thread.domain}
            </a>
          </div>
          <span className="thread-description">{thread.description}</span>
        </div>
      ))}
    </StyledThreadList>
  );
};

export default ThreadList;
