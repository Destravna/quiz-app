import { useState } from "react";
import LinearDeterminate from "./components/progressBar";
import "./App.css";
import questions from "./questions";


function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctProgressBar, setCorrectProgessBar] = useState(0);
  const [incorrectProgressBar, setIncorrectProgressBar] = useState(0);
  const[showNote, setshowNote] = useState(true);
  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 5);
      setCorrectProgessBar((prevVal)=>prevVal + 100/questions.length);
      setshowNote(false);
    }
    else{
      setScore(score - 4);
      setIncorrectProgressBar((prevVal)=>prevVal + 25);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div>
      
      <div className="app">
      <LinearDeterminate  cValue = {correctProgressBar} iValue = {incorrectProgressBar} points ={score} />
      <br/>
      {showScore ? (
        <div className="score-section">
         You scored {score} out {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Questão {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
          
        </>
      )}
      {showNote && <div>
          <h3>Note : Right answer is 5 points, wrong ans -4 points</h3>
          </div>
      }
      </div>
      
      
    
    </div>
    
  );
}

export default App;
