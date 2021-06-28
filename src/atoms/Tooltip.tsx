import React from "react";
import styled from "styled-components";

const StyledTooltip = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
`;

interface tooltipProps {
  text: string;
}

const Tooltip = ({ text }: tooltipProps) => {
  return (
    <StyledTooltip>
      <div className="tooltip-corps">{text}</div>
    </StyledTooltip>
  );
};

export default Tooltip;
