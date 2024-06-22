function Footer(){
    var num1 = 10;

    if(num1%2 === 0){
        return(<h1>true</h1>);
    } else{
        return(<h1>false</h1>);
    }  
    return(
        <footer>
            <h1>바디 영역</h1>
            <h1> num1 변수의 값 : { num1%2===0?  "짝수":"홀수" }</h1>      {/*삼항식 :  num1 === 0 true : false */}
        </footer>
    );
}

export default Footer