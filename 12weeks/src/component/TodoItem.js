import "./TodoItem.css"

function TodoItem({id, isDone, content, createdDate, onDelete, onUpdate}){
    const onClickDelete = ()=> {
        onDelete(id);
    }
    
    return(
        <div className="TodoItem">
            <div>{id}</div>
            <div className="checkbox_col">
                <input type="checkbox" checked={isDone}/>
            </div>
            <div className="title_col">{content}</div>
            <div className="data_col">
                {new Date(createdDate).toLocaleDateString()}
            </div>
            <div className="btn_col">
                <button onClick={onClickDelete} >삭제</button>
            </div>
        </div>
    );
}
export default TodoItem