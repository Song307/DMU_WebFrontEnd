import "./Body.css";

function Body(props){
    function handleOnClick( e ){               //handleOnClick : 이벤트 리스너(핸들러)  e : 이벤트객체 -> 이벤트 소스 포함한 객체를 전달,  매개변수 자리에 사용
        console.log(e);
        alert(e.target.name + "버튼을 클릭하셨군요!");
    }
    return(
        <div>
            <h1> BODY </h1>
            <button name="btn1" onClick={handleOnClick}>버튼</button>
            <button name="btn2" onClick={handleOnClick}>버튼</button>
        </div>
    );
}

export default Body