import "./Body.css";

function Body({ name, location, favoList }){
    return(
        <div style={{backgroundColor:"yellow", color:"red"}}>
            <h1 className="body">바디 영역</h1>
            <h1>{name}은 {location}에 산다. <br/> 
            {favoList.length}개 음식이며 {favoList[0]} 음식이 첫번째 이다.    
            </h1>        
        </div>
    );
}

export default Body

//length : 몇개의 앨리멘트(값)이 들어있는지 리턴