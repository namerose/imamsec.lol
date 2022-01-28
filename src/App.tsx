import { useCallback, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import {
  useSampleDispatch,
  useSampleState,
} from "./components/context/pageContext";
import useSnackBar from "./hooks/useSnackBar";
import SnackBar from "./components/organisms/SnackBar";
import Introduce from "./components/pages/Introduce";
import Profile from "./components/pages/Profile";
import Skills from "./components/pages/Skills";
import Welcome from "./components/pages/Welcome";
import TmplFooter from "./components/templates/TmplFooter";
import TmplHeader from "./components/templates/TmplHeader";
import { theme } from "./styles/theme";
import {
  headerClickMQuery,
  headerCopy,
  headerGoWebSite,
  headerSetHover,
} from "./utils/headerWorks";
import { pageChange, pageChangeWork } from "./utils/pageChangeWorks";

export default function App() {
  const outerDivRef = useRef<HTMLDivElement>(null);
  const {
    nowSlide,
    headerHover,
    mQuery,
  }: { nowSlide: number; headerHover: HeaderHover; mQuery: boolean } =
    useSampleState();
  const dispatch = useSampleDispatch();
  const timer = useRef<any>(null);
  const {
    viewText,
    setViewText,
  }: { viewText: string; setViewText: (text: string) => void } = useSnackBar();

  const screenSizeChange = (e: MediaQueryListEvent) => {
    const matches = e.matches;
    dispatch({
      type: "SET_MQUERY",
      state: matches,
    });
  };

  const setPageChange = useCallback(
    (e: any) => pageChange({ e, dispatch, timer, nowSlide }),
    [dispatch, nowSlide]
  );

  const headerClick: HeaderClick = {
    githubLink: () => {
      headerGoWebSite("https://github.com/imamsec");
    },
    call: () => {
    },
    email: () => {
      headerCopy("syechrulimam@gmail.com");
      setViewText("Alamat email telah disalin.");
    },
  };

  const headerClickMobile: HeaderClick = {
    githubLink: (e: any) =>
      headerClickMQuery({
        e,
        dispatch,
        objPropKey: "githubLink",
        headerClick: headerClick.githubLink,
      }),
    call: (e: any) =>
      headerClickMQuery({
        e,
        dispatch,
        objPropKey: "call",
        headerClick: headerClick.call,
      }),
    email: (e: any) =>
      headerClickMQuery({
        e,
        dispatch,
        objPropKey: "email",
        headerClick: headerClick.email,
      }),
  };

  useEffect(() => {
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent?.addEventListener("wheel", setPageChange);
    return () => {
      outerDivRefCurrent?.removeEventListener("wheel", setPageChange);
    };
  }, [setPageChange]);

  useEffect(() => {
    const mql = window.matchMedia("screen and (max-width:700px)");
    mql.addEventListener("change", screenSizeChange);
    return () => mql.removeEventListener("change", screenSizeChange);
  });

  return (
    <ThemeProvider theme={theme}>
      <TmplHeader
        headerHover={headerHover}
        headerClick={headerClick}
        headerClickMobile={headerClickMobile}
        headerSetHover={headerSetHover}
        mQuery={mQuery}
        dispatch={dispatch}
      />
      <div ref={outerDivRef} className="outer">
        {nowSlide === 0 && <Welcome />}
        {nowSlide === 1 && <Profile />}
        {nowSlide === 2 && <Introduce />}
        {nowSlide === 3 && <Skills />}
        {viewText && <SnackBar text={viewText} />}
      </div>
      <TmplFooter
        nowSlide={nowSlide}
        pageChangeWork={pageChangeWork}
        dispatch={dispatch}
      />
    </ThemeProvider>
  );
}
