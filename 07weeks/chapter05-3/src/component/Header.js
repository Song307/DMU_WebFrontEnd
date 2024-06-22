function Header(){


    var num1 = true;  //함수 선언 = var, const 등

    var numV1 = true;
    var numV2 = false;  //부울린 연산의 결과값(형변환) : {String(numV1 == numV2)}
    
    var numN = "10"; //문자형 숫자의 정수화 (형변환) : Number(num1) + 10

    var numT1 = { name : "numT1.hi", age : 10 };  //객체안에 있는 프로퍼티 접근 : numT1.name
    //<img> jsx블록에서 사용할시 시작, 종료태그 생략 불가 < />

    return(
        <header>
            <h1> numV 부울린 연산 결과값 : {String(numV1 == numV2)} </h1> {/* 주석 */}
            <h1>{ numT1.name }</h1>
        </header>
    );
}

export default Header