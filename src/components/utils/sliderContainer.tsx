import styled from "styled-components";

const Styles = styled.div`
  display: flex;
  width: 85vw;
  overflow-x: hidden;

  & > div {
    margin: 0 2.5vw;
    transition: all 0.3s ease-in-out;
    transform: ${({ slideNum }: { slideNum: number }) =>
      `translateX(-${slideNum * 100 - 15}vw)`};
  }
`;

export default function SliderContainer({
  slideNum,
  children,
}: {
  slideNum: number;
  children: React.ReactNode;
}) {
  return <Styles slideNum={slideNum}>{children}</Styles>;
}
