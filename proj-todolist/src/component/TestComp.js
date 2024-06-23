import { useReducer } from "react";

// reducer 함수: 상태와 액션을 기반으로 새로운 상태를 반환
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      // 현재 상태에 action.data를 더한 값을 반환
      return state + action.data;
    case "DECREASE":
      // 현재 상태에서 action.data를 뺀 값을 반환
      return state - action.data;
    case "INIT":
      // 상태를 0으로 초기화
      return 0;
    default:
      // 처리할 수 없는 액션 타입일 경우 기존 상태 반환
      return state;
  }
}

// TestComp 컴포넌트 정의
function TestComp() {
  // useReducer 훅을 사용하여 상태와 디스패치 함수 생성, 초기 상태는 0
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        {count}
      </div>
      <div>
        {/* INCREASE 액션을 디스패치하여 count 증가 */}
        <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>
          +
        </button>
        {/* DECREASE 액션을 디스패치하여 count 감소 */}
        <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>
          -
        </button>
        {/* INIT 액션을 디스패치하여 count를 0으로 초기화 */}
        <button onClick={() => dispatch({ type: "INIT" })}>0으로 초기화</button>
      </div>
    </div>
  );
}

export default TestComp;


/*


주석 설명
  import { useReducer } from "react";: useReducer 훅을 React 라이브러리에서 임포트합니다.
  reducer 함수: 상태와 액션을 받아 새로운 상태를 반환하는 함수입니다. 액션 타입에 따라 상태를 증가, 감소 또는 초기화합니다.
    "INCREASE": 현재 상태에 action.data를 더한 값을 반환합니다.
    "DECREASE": 현재 상태에서 action.data를 뺀 값을 반환합니다.
    "INIT": 상태를 0으로 초기화합니다.
    default: 처리할 수 없는 액션 타입일 경우 기존 상태를 반환합니다.
  TestComp 함수형 컴포넌트: useReducer 훅을 사용하여 count 상태와 dispatch 함수를 생성합니다. 초기 상태는 0입니다.
    useReducer(reducer, 0): reducer 함수와 초기 상태 0을 사용하여 상태와 디스패치 함수를 생성합니다.
    {count}: 현재 상태를 표시합니다.
    <button> onClick 이벤트 핸들러: 버튼 클릭 시 각각 INCREASE, DECREASE, INIT 액션을 디스패치하여 상태를 변경합니다.

*/