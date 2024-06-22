import "./Body.css";

function Body(props){
    return(
        <div style={{backgroundColor:"yellow", color:"red"}}>
            <h1 className="body">바디 영역</h1>
            <h1>{props.na}은 {props.location}에 산다.</h1>    
        </div>
    );
}

export default Body