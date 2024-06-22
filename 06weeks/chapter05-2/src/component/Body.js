import "./Body.css";

function Body(props){
    return(
        <div style={{backgroundColor:"yellow", color:"red"}}>
            <h1 className="body">바디 영역</h1>
            <h1>{props.na}은 {props.location}에 산다.</h1>    
        </div>
    );
}

Body.defaultProps={         //부모 컴퍼넌트가 넘겨주는 값이 없을시 속성값 설정
    location : " 없음 "
} 
export default Body