import React from "react";
import { IThread } from "../apollo/thread/interface";
import styled from "styled-components";

const StyledThreadList = styled.div`
  padding-top: 100px;
  text-align: center;
  align-items: center;

  .thread {
    padding: 10px;
    margin: 0 50px;
    text-align: left;
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
          <b>{thread.name}</b> : ({thread.url})
        </div>
      ))}
    </StyledThreadList>
  );
};

export default ThreadList;
