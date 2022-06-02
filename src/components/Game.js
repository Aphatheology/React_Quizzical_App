import { useEffect, useState } from "react";

export default function Game(props) {
//   0: Object
// 1: Object
// 2: Object
// 3: Object
// category: "Politics"
// type: "multiple"
// difficulty: "medium"
// question: "In United States history, how many vice presidents did Franklin D. Roosevelt have during his time in office as president?"
// correct_answer: "3"
// incorrect_answers: Array(3)
// 0: "2"

    // function getAnswer(e) {
    //     // console.log(e.target.value)
    //     if(e.target.value === props.game[e.target.name].correct_answer) {
    //         console.log("correct")
    //     }
    // }
    let userAnswer = []
    // let [score, setScore] = useState(0)
    let score = 0;
    useEffect(() => {
        let score = 0;
    }, [])
  function getAnswer(e, bindex) {
    console.log(e.target.value)
    // if(e.target.value === quiz[e.target.name].correct_answer) {
    //     console.log("correct")
    // }
    userAnswer[bindex] = e.target.value
    console.log(userAnswer)
  }

  function getScore() {
    let answerArray = props.game.map(each => each.correct_answer)
    console.log(answerArray)
    // let score = 0
    for (let i = 0; i < answerArray.length; i++) {
        if (answerArray[i] === userAnswer[i]) {
        //   console.error(`Values at index ${index} do not match`);
        //   return false;
            // setScore(score + 1)
            score = score + 1
        }
      }
    // let score = 0
    // quiz.map(eachquiz => {
    //   if(eachquiz.correct_answer === true) {
    //       console.log(eachquiz.correct_answer)
    //     score++
    //   }

    // })
    // return score
    console.log(score)
    return score
  }
  
  return (
    <div className="game">
        {
            props.game.map((eachquiz, bindex) => {
                let options = [...eachquiz.incorrect_answers, eachquiz.correct_answer]
                
                options.sort(() => Math.random() - 0.5);
                
                let allOptions = [
                    {option: options[0], correct: false},
                    {option: options[1], correct: false},
                    {option: options[2], correct: false},
                    {option: options[3], correct: true}
                ]
                return (
                    <div className="question" key={bindex}>
                        <h3 dangerouslySetInnerHTML={{__html: eachquiz.question}}></h3>

                        <div className="options">
                            {options.map((eachOption, index) => {
                                return (
                                    <div key={index}>
                                        <input onClick={(e) => getAnswer(e, bindex)} type="radio" id={`option${bindex}${index}`} value={eachOption} name={bindex} />
                                        <label htmlFor={`option${bindex}${index}`} dangerouslySetInnerHTML={{__html: eachOption}} ></label>
                                    </div>
                                ) 
                            })}


                            {/* {options.map((eachOption, index) => {
                                return (
                                    <>
                                        <input onClick={props.getAnswer} type="radio" id={`option${bindex}${index}`} value={eachOption} name={bindex} />
                                        <label for={`option${bindex}${index}`} dangerouslySetInnerHTML={{__html: eachOption}} ></label>
                                    </>
                                ) 
                            })} */}

                            {/* {allOptions.map((eachOption, index) => {
                                return (
                                    <>
                                        <input type="radio" id={`option${bindex}${index}`} value="1" name={bindex} />
                                        <label for={`option${bindex}${index}`} dangerouslySetInnerHTML={{__html: eachOption.option}} ></label>
                                    </>
                                ) 
                            })} */}
                        </div>  
                        <div className="linebreak"></div> 
                    </div>
                )
            })
        }

        <button className="check" onClick={getScore}>Check Answers</button>
        <p>Score: {score}</p>
    </div>
  );
}
