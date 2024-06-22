import "./Body.css";

function Body(props){
    function handleOnClick(e){               //handleOnClick : 이벤트 리스너(핸들러), e : 이벤트객체 -> 이벤트 소스 포함한 객체를 전달,  매개변수 자리에 사용
        alert("버튼을 클릭하셨군요!");
    }
    return(
        <div>
            <h1> BODY </h1>
            <button onClick={handleOnClick}>버튼</button>
        </div>
    );
}

export default Body