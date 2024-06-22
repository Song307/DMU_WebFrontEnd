import { useState, useRef } from "react";
import "./TodoEditor.css";

function TodoEditor({onCreate}){
    
    const [content, setContent] = useState("");
    const inputRef = useRef();
    const onSubmit = () => {
        if(content===""){
            inputRef.current.focus();
            return
        }
        onCreate(content);
        setContent(""); }
    const onChangeContent = (e) => { setContent(e.target.value); }

    const onkeydown = (e) => {
        if(e.keyCode === 13) { onSubmit(); }
    }

    return(
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 ✏️</h4>
            <div className="editer_wrapper">
                <input 
                    ref={inputRef}
                    value={content}
                    onChange={onChangeContent}
                    onKeyDown={onkeydown}
                    placeholder= "새로운 Todo..."
                    >
                </input>
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}
export default TodoEditor;