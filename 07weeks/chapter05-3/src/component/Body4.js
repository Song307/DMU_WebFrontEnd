import "./Body.css";

function Body({ children }){
    return(
        <div style={{backgroundColor:"yellow", color:"red"}}>
            { children }
        </div>
    );
}

export default Body

