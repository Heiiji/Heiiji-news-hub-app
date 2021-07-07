import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_ALL_THREAD } from "../apollo/thread/actions";
import ThreadList from "../organisms/ThreadList";

const StyledSources = styled.div``;

const Sources = () => {
  const threads = useQuery(GET_ALL_THREAD);

  if (threads.loading) {
    return <p>Loading</p>;
  }
  console.log(threads);

  return (
    <StyledSources>
      <ThreadList threads={threads.data.threads} />
    </StyledSources>
  );
};

export default Sources;
