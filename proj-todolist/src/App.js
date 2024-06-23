import "./App.css";
import React, { useMemo, useCallback, useReducer, useRef } from "react";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

// 초기 Todo 목록을 정의한 배열
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

// reducer 함수: 상태와 액션을 기반으로 새로운 상태를 반환
function reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      // 새로운 Todo 아이템을 추가
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      // 기존 Todo 아이템의 완료 상태를 토글
      return state.map((it) =>
        it.id === action.targetId
          ? {
              ...it,
              isDone: !it.isDone,
            }
          : it
      );
    }
    case "DELETE": {
      // 특정 Todo 아이템을 삭제
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      // 처리할 수 없는 액션 타입일 경우 기존 상태 반환
      return state;
  }
}

// Todo 상태와 디스패치 컨텍스트 생성
export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

function App() {
  // useReducer 훅을 사용하여 상태와 디스패치 함수 생성
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  // idRef를 사용하여 새로운 Todo 아이템의 id를 생성
  const idRef = useRef(3);

  // 새로운 Todo 아이템을 생성하는 함수
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  }, []);

  // Todo 아이템의 완료 상태를 토글하는 함수
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);

  // Todo 아이템을 삭제하는 함수
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  // 디스패치 함수를 메모이제이션하여 성능 최적화
  const memoizedDispatches = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, [onCreate, onUpdate, onDelete]);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todo}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>    
    </div>
  );
}

export default App;



/*
주석 설명
mockTodo: 초기 할 일 목록을 정의한 배열입니다.
reducer: 상태(state)와 액션(action)을 받아서 새로운 상태를 반환하는 함수입니다. 액션 타입에 따라 새로운 아이템을 추가하거나, 아이템을 업데이트하거나, 삭제합니다.
TodoStateContext와 TodoDispatchContext: 상태와 디스패치 함수를 전달하기 위해 Context API를 사용합니다.
App 컴포넌트:
  useReducer를 사용하여 상태와 디스패치 함수를 생성합니다.
  useRef를 사용하여 새로운 아이템의 ID를 생성합니다.
  useCallback을 사용하여 onCreate, onUpdate, onDelete 함수를 정의하고, 이를 메모이제이션합니다.
  useMemo를 사용하여 디스패치 함수들을 메모이제이션하여 성능을 최적화합니다.
  TodoStateContext.Provider와 TodoDispatchContext.Provider를 사용하여 자식 컴포넌트들에게 상태와 디스패치 함수를 제공합니다.
*/