import { useState } from "react";

export default function useSlide(maxPageNum: number) {
  const [slideNum, setSlideNum] = useState<number>(0);

  const slideNumSetter = (num: number) => {
    if (num >= maxPageNum) {
      setSlideNum(0);
    } else if (num < 0) {
      setSlideNum(maxPageNum - 1);
    } else {
      setSlideNum(num);
    }
  };

  return { slideNum, slideNumSetter, maxPageNum };
}
