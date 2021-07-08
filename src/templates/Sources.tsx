import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_ALL_THREAD } from "../apollo/thread/actions";
import { GET_ME } from "../apollo/user/actions";
import ThreadList from "../organisms/ThreadList";

const StyledSources = styled.div``;

const Sources = () => {
  const me = useQuery(GET_ME);
  const threads = useQuery(GET_ALL_THREAD);

  if (threads.loading || me.loading) {
    return <p>Loading</p>;
  }

  return (
    <StyledSources>
      <ThreadList threads={threads.data.threads} />
    </StyledSources>
  );
};

export default Sources;
