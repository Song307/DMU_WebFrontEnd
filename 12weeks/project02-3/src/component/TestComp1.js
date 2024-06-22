import { useReducer } from "react";
//reducer 함수의 위치는 같은 컴포넌트가 아닌 다른 외부 파일로도 유지 가능 


function reducer(state, action){
    switch (action.type){
        case "INCREASE":
            return state + action.data;
        case "DECREASE" :
            return state - action.data;
        case "INIT" :
            return 0;
        default :
            return state;
    }
}

function TestComp(){
    const [count, dispath] = useReducer(reducer, 0); //useReducer : 실제 변경 함수 / 초기값
        //[state 값, 변경할 함수 이름(촉매함수)]
    return(
        <div>
            <h4>Test Component</h4>
            <div>
                <b>{count}</b>
            </div>
            <div>
                <button onClick={()=> dispath({type : "INCREASE", data : 1})}> + </button>
                <button onClick={()=> dispath({type : "DECREASE", data : 1})}> - </button>
                <button onClick={()=> dispath({type : "INIT"})}> 0으로 초기화 </button>
            </div>
        </div>
    );
}
export default TestComp