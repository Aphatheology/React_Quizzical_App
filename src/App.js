import { useState, useEffect } from "react";
import Game from "./components/Game";
import IntroPage from "./components/IntroPage";
import "./App.css";

export default function App() {
  const [quiz, setQuiz] = useState([])
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
    .then(res => res.json())
    .then(data => {
      // console.log(data.results)
      setQuiz(data.results)
      
    })
  }, [])
  const [show, setShow] = useState(false)
  function showGame() {
    setShow(!show)
  }
  let hide= show ? "hide" : ""
  let userAnswer = []
  function getAnswer(e) {
    // console.log(e.target.value)
    // if(e.target.value === quiz[e.target.name].correct_answer) {
    //     console.log("correct")
    // }
    // userAnswer[index] = e.target.value
    // console.log(userAnswer)
  }

  function getScore() {
    let answerArray = quiz.map(each => each.correct_answer)
    console.log(answerArray)
    // let score = 0
    // quiz.map(eachquiz => {
    //   if(eachquiz.correct_answer === true) {
    //       console.log(eachquiz.correct_answer)
    //     score++
    //   }

    // })
    // return score
  }
  
  return (
    
    <div className="App">
      <div className={`container ${hide}`}>
      <IntroPage showGame={showGame}/>
      {/* <p>{show ? "True" : "False"}</p> */}
        </div>
        {show && <Game game={quiz}/>}
        {/* {show && <Game getScore={getScore} getAnswer={getAnswer} game={quiz}/>} */}
        {/* <Game /> */}
    </div>
  );
}
