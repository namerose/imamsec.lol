import styled, { css } from "styled-components";

const Styles = styled.div`
  font-size: 20px;
  text-align: center;
  width: 7vw;
  cursor: pointer;

  ${({ slideNum, maxPageNum }: { slideNum: number; maxPageNum: number }) =>
    (slideNum < 0 || slideNum === maxPageNum) &&
    css`
      color: #c3c3c3;
      cursor: default;
    `}
`;

export default function BtnWorksSlide({
  icon,
  slideNumSetter,
  slideNum,
  maxPageNum,
}: {
  icon: React.ReactNode;
  slideNumSetter: (num: number) => void;
  slideNum: number;
  maxPageNum: number;
}) {
  return (
    <Styles
      slideNum={slideNum}
      maxPageNum={maxPageNum}
      onClick={() => {
        slideNum >= 0 && slideNum < maxPageNum && slideNumSetter(slideNum);
      }}
    >
      {icon}
    </Styles>
  );
}
