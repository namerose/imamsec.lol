export const pageChangeWork = (slideNum: number, dispatch: any) => {
  dispatch({ type: "SET_ANIMATION", state: true });
  setTimeout(() => {
    dispatch({ type: "SET_ANIMATION", state: false });
    dispatch({ type: "SET_NOWSLIDE", state: slideNum });
  }, 350);
};

const toSetEnablePageChange = (timer: any) => {
  clearTimeout(timer.current);
  timer.current = null;
};

export const pageChange = ({ e, dispatch, timer, nowSlide }: PageChange) => {
  if (!timer.current) {
    e.preventDefault();
    const { deltaY } = e;
    if (deltaY > 0 && nowSlide < 4) {
      pageChangeWork(nowSlide + 1, dispatch);
    } else if (deltaY < 0 && nowSlide > 0) {
      pageChangeWork(nowSlide - 1, dispatch);
    }
    timer.current = setTimeout(() => {
      toSetEnablePageChange(timer);
    }, 250);
  } else {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      toSetEnablePageChange(timer);
    }, 250);
  }
};
