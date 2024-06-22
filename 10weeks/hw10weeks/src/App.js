import React, { useState } from 'react';
import './App.css'; // 필요한 경우 CSS 파일 추가

const choices = [
  { name: '주먹', image: '/rock.jpg' },
  { name: '보자기', image: '/paper.jpg' },
  { name: '가위', image: '/scissors.jpg' }
];

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const playGame = (userChoice) => {
    setUserChoice(userChoice);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)].name;
    setComputerChoice(computerChoice);
    determineWinner(userChoice, computerChoice);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("비김!");
    } else if (
      (user === '주먹' && computer === '가위') ||
      (user === '보자기' && computer === '주먹') ||
      (user === '가위' && computer === '보자기')
    ) {
      setResult("승리!");
    } else {
      setResult("패배!");
    }
  };

  return (
    <div className="game-container">
      <h1>가위바위보 게임</h1>
      <hr/>
      <div className="choices">
        {choices.map(choice => (
          <button key={choice.name} onClick={() => playGame(choice.name)}>
            <img src={choice.image} alt={choice.name} />
          </button>
        ))}
      </div>
      <div className="result">
        <hr/>
        {userChoice && <p>사용자 : <strong>{userChoice}</strong></p>}
        {computerChoice && <p>컴퓨터 : <strong>{computerChoice}</strong></p>}
        {result && <p>{result}</p>}
      </div>
      <hr/>
      <p>YD 20212127 송하성</p>
    </div>
  );
};

export default App;