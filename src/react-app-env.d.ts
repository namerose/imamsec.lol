/// <reference types="react-scripts" />

// 헤더 3버튼의 hover 여부
type HeaderHover = {
  githubLink: boolean;
  call: boolean;
  email: boolean;
};

// 헤더 3버튼 클릭 시 작업
type HeaderClick = {
  githubLink: (e?: any) => void;
  call: (e?: any) => void;
  email: (e?: any) => void;
};

// 작품 페이지에서 각 작품의 깃허브 및 시연 링크
type WorkLinks = {
  gotoFrontRepo: () => void;
  gotoBackRepo: () => void;
  gotoWorkLink: () => void;
};

// 헤더에 필요한 props
type HeaderProps = {
  headerHover: HeaderHover;
  headerClick: HeaderClick;
  headerClickMobile: HeaderClick;
  headerSetHover: (dispatch: any, objProp: any) => void;
  mQuery: boolean;
  dispatch: any;
};

// 푸터에 필요한 props
type FooterProps = {
  nowSlide: number;
  pageChangeWork: (slideNum: number, dispatch: any) => void;
  dispatch: any;
};

// 모바일 헤더 클릭 시, HeaderClick의 각 메소드에서 호출되는 함수 headerClickMQuery에 전달되는 파라미터 객체
type HeaderClickMQuery = {
  e: any;
  dispatch: any;
  objPropKey: string;
  headerClick: () => void;
};

// 페이지 전환 시 호출되는 함수 pageChange에 전달되는 파라미터 객체
type PageChange = {
  e: any;
  dispatch: any;
  timer: any;
  nowSlide: number;
};
