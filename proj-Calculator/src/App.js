import { useState } from "react";
import './App.css'; 

const Calculator = () => {
    const [result, setResult] = useState('');

    // 숫자나 연산자 버튼 클릭 시 결과창에 값을 추가하는 함수
    const handleClick = (value) => {
        setResult(result + value);
    };

    // '=' 버튼 클릭 시 결과를 계산하는 함수
    const calculate = () => {
        try {
            setResult(eval(result) || ''); // eval 함수를 사용하여 문자열 형태의 수식을 계산
        } catch (error) {
            setResult('Error'); // 계산 중 오류 발생 시 'Error' 표시
        }
    };
    //eval 함수는 문자열을 자바스크립트 코드로 실행하는 함수. 주어진 문자열을 코드로 처리하여 그 결과를 반환. 여기서 문자열은 수식이나 임의의 자바스크립트 코드일 수 있음.

    // 'C' 버튼 클릭 시 결과창을 초기화하는 함수
    const clear = () => {
        setResult('');
    };

    return (
        <div className="calculator">
            {/* 결과창 */}
            <input type="text" value={result} readOnly/>
            {/* 숫자와 연산자 버튼들 */}
            <div className="buttons">
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('/')}>/</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('*')}>*</button>
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('-')}>-</button>
                <button onClick={() => handleClick('.')}>.</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={clear}>C</button>
                <button onClick={calculate}>=</button>
                <button onClick={() => handleClick('+')}>+</button>
            </div>
        </div>
    );
};

export default Calculator;