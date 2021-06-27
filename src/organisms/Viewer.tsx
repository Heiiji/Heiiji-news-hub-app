import React from "react";
import styled from "styled-components";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ACTIVE_VIEW, SET_ACTIVE_VIEW } from "../apollo/viewer/actions";

const StyledViewer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: calc(100% - 43px);

  iframe {
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    z-index: 2;
  }
  .toolbar {
    position: absolute;
    top: 0;
    height: 0px;
    background-color: white;
    right: 10px;
  }

  .spinner-border {
    z-index: 1;
    position: relative;
    top: 49%;
    left: 49%;
  }

  @media screen and (max-width: 1000px) {
    padding: 0px;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
`;

const Viewer = () => {
  const [setActiveView] = useMutation(SET_ACTIVE_VIEW);
  const { data } = useQuery(GET_ACTIVE_VIEW, {
    pollInterval: 600,
  });

  const _onClose = () => {
    setActiveView().catch((err) => {
      console.error(err);
    });
  };

  if (!data || !data.activeView) {
    return <div />;
  }

  return (
    <StyledViewer>
      <div className="spinner-border text-primary" role="status"></div>
      <iframe
        onClick={(ev) => ev.stopPropagation()}
        id="inlineFrameExample"
        title="viewer"
        src={data.activeView.url}
      ></iframe>
    </StyledViewer>
  );
};

export default Viewer;
