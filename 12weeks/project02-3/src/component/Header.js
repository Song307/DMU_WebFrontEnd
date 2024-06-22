import "./Header.css";
import React from "react";

function Header() {
    console.log("Header 컴포넌트 호출");
    return(
        <div className="Header">
            <h3>오늘은 🗓️</h3>
            <h1>{new Date().toDateString()}</h1>    
        </div> 
        
    )
};
export default React.memo(Header); //관련 없는 리렌더링 작업 방지