import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  font-size: 25px;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }

  &:hover {
    transition: 0.2s all ease-in-out;
    color: #4b4b4b;
  }

  &:not(:hover) {
    transition: 0.2s all ease-in-out;
    color: #808080;
  }
`;

export default function BtnHeader({
  onClick,
  headerSetHover,
  btnKind,
  icon,
  mQuery,
  dispatch,
}: {
  onClick: () => void;
  headerSetHover: (dispatch: any, objProp: any) => void;
  btnKind: string;
  icon: React.ReactNode;
  mQuery: boolean;
  dispatch: any;
}) {
  return (
    <Styles
      onMouseEnter={() =>
        !mQuery && headerSetHover(dispatch, { [btnKind]: true })
      }
      onMouseLeave={() =>
        !mQuery && headerSetHover(dispatch, { [btnKind]: false })
      }
      onClick={onClick}
    >
      {icon}
    </Styles>
  );
}
