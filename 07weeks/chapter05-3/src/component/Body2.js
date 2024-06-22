import "./Body.css";

function Body({ name, location }){
    //const { name, location } = props;
    return(
        <div style={{backgroundColor:"yellow", color:"red"}}>
            <h1 className="body">바디 영역</h1>
            <h1>{name}은 {location}에 산다.</h1>    
        </div>
    );
}

export default Body