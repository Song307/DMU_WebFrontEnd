import React from "react";
import "./Header.css";

// Header 컴포넌트 정의
const Header = () => {
  // 컴포넌트가 호출될 때마다 콘솔에 로그 출력
  console.log(" Header 컴포넌트 호출");

  // 현재 날짜를 표시하는 JSX 반환
  return (
    <div className="Header">
      <h3>오늘은 📅</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// React.memo를 사용하여 불필요한 리렌더링 방지
export default React.memo(Header);

/*
주석 설명
  import React from "react";: React 라이브러리를 임포트합니다.
  import "./Header.css";: 컴포넌트에 적용할 CSS 파일을 임포트합니다.
  const Header = () => { ... };: Header라는 함수형 컴포넌트를 정의합니다.
  console.log(" Header 컴포넌트 호출");: Header 컴포넌트가 호출될 때마다 콘솔에 로그를 출력합니다. 이는 컴포넌트가 언제 렌더링되는지 확인하는 데 유용합니다.
  return ( ... );: 현재 날짜를 표시하는 JSX를 반환합니다. div 요소에 "Header" 클래스를 적용하고, h3 요소와 h1 요소를 사용하여 날짜를 표시합니다.
  {new Date().toDateString()}: 현재 날짜를 문자열 형식으로 반환하여 h1 요소에 표시합니다.
  export default React.memo(Header);: Header 컴포넌트를 React.memo로 감싸서 불필요한 리렌더링을 방지합니다.
  React.memo는 컴포넌트가 동일한 props로 렌더링될 때, 이전 결과를 재사용하여 성능을 최적화합니다.
*/