import React from "react";
import styled, { css } from "styled-components";
import { lighten } from "polished";

const LayoutStyle = styled.div<{
  bgColor: string;
  txtColor: string;
  isBtn: boolean;
}>`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  background: ${(props: any) => props.bgColor};
  color: ${(props: any) => props.txtColor};
  ${(props: any) =>
    props.isBtn &&
    css`
      cursor: pointer;
      &:hover {
        transition: 0.2s all ease-in-out;
        background: ${(props: any) => lighten(0.1, props.bgColor)};
      }
    `}
  height: 35px;

  @media screen and (max-width: 700px) {
    padding: 4px 5px;
    border-radius: 3px;
    height: 24px;
  }
`;

const IconStyle = styled.div`
  font-size: 25px;
  height: 25px;

  @media screen and (max-width: 700px) {
    font-size: 15px;
    height: 15px;
  }
`;

const TextStyle = styled.div`
  font-size: 17px;
  margin-left: 10px;
  font-family: NanumSquareB;

  @media screen and (max-width: 700px) {
    font-size: 13px;
    margin-left: 5px;
  }
`;

export default function BgeBadge({
  icon,
  text,
  bgColor,
  txtColor,
  onClick,
}: {
  icon: React.ReactNode;
  text: string;
  bgColor: string;
  txtColor: string;
  onClick: (() => void) | null;
}) {
  if (onClick) {
    return (
      <LayoutStyle
        bgColor={bgColor}
        txtColor={txtColor}
        isBtn={true}
        onClick={onClick}
      >
        <IconStyle>{icon}</IconStyle>
        <TextStyle>{text}</TextStyle>
      </LayoutStyle>
    );
  } else {
    return (
      <LayoutStyle bgColor={bgColor} txtColor={txtColor} isBtn={false}>
        <IconStyle>{icon}</IconStyle>
        <TextStyle>{text}</TextStyle>
      </LayoutStyle>
    );
  }
}

BgeBadge.defaultProps = {
  onClick: null,
};
