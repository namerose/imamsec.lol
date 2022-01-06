import styled from "styled-components";
import BtnWorksSlide from "../atoms/button/BtnWorksSlide";
import WorksForestia from "../organisms/WorksForestia";
import WorksReactTodoList from "../organisms/WorksReactTodoList";
import Slide from "../utils/slide";
import SliderContainer from "../utils/sliderContainer";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useSampleState } from "../context/pageContext";

const Styles = styled.div`
  width: 1150px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    width: 100vw;
  }
`;

export default function TmplWorks({
  forestiaLinks,
  reactTodoListLinks,
  slideNum,
  slideNumSetter,
  maxPageNum,
}: {
  forestiaLinks: WorkLinks;
  reactTodoListLinks: WorkLinks;
  slideNum: number;
  slideNumSetter: (num: number) => void;
  maxPageNum: number;
}) {
  const { mQuery } = useSampleState();

  return (
    <Styles>
      {!mQuery ? (
        <>
          <WorksForestia workLinks={forestiaLinks} />
          <WorksReactTodoList workLinks={reactTodoListLinks} />
        </>
      ) : (
        <>
          <BtnWorksSlide
            icon={<AiOutlineLeft />}
            slideNumSetter={slideNumSetter}
            slideNum={slideNum - 1}
            maxPageNum={maxPageNum}
          />
          <SliderContainer slideNum={slideNum}>
            <Slide>
              <WorksForestia workLinks={forestiaLinks} />
            </Slide>
            <Slide>
              <WorksReactTodoList workLinks={reactTodoListLinks} />
            </Slide>
          </SliderContainer>
          <BtnWorksSlide
            icon={<AiOutlineRight />}
            slideNumSetter={slideNumSetter}
            slideNum={slideNum + 1}
            maxPageNum={maxPageNum}
          />
        </>
      )}
    </Styles>
  );
}
