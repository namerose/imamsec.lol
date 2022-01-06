import styled from "styled-components";

const Styles = styled.div`
  font-size: 17px;
  text-align: center;
  letter-spacing: 5px;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    font-size: 12px;
    letter-spacing: 2px;
  }

  font-family: ${({
    nowSlide,
    pageNum,
  }: {
    nowSlide: number;
    pageNum: number;
  }): string => {
    return nowSlide === pageNum ? "NanumSquareB" : "NanumSquareL";
  }};
`;

export default function BtnFooter({
  nowSlide,
  pageNum,
  text,
  pageChangeWork,
  dispatch,
}: {
  nowSlide: number;
  pageNum: number;
  text: string;
  pageChangeWork: (slideNum: number, dispatch: any) => void;
  dispatch: any;
}) {
  return (
    <Styles
      nowSlide={nowSlide}
      pageNum={pageNum}
      onClick={() => pageNum !== nowSlide && pageChangeWork(pageNum, dispatch)}
    >
      {text}
    </Styles>
  );
}
