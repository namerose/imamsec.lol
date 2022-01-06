export const headerCopy = (copyVal: string) => {
  navigator.clipboard.writeText(copyVal);
};

export const headerGoWebSite = (url: string) => {
  window.open(url, "_blank");
};

export const headerSetHover = (dispatch: any, objProp: any) => {
  const key = Object.keys(objProp)[0];
  const value = objProp[key];
  dispatch({ type: "SET_HOVER", key, value });
};

export const headerAddClickEvent = (ref: any, callBack: () => void) => {
  ref.addEventListener("click", callBack);
};

export const headerRemoveClickEvent = (ref: any, callBack: () => void) => {
  ref.removeEventListener("click", callBack);
};

export const headerClickMQuery = ({
  e,
  dispatch,
  objPropKey,
  headerClick,
}: HeaderClickMQuery) => {
  const ref = e.target;
  headerSetHover(dispatch, { [objPropKey]: true });
  headerAddClickEvent(ref, headerClick);
  setTimeout(() => {
    headerSetHover(dispatch, { [objPropKey]: false });
    headerRemoveClickEvent(ref, headerClick);
  }, 2000);
};
