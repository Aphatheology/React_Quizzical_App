
export default function IntroPage(props) {

    return (
      <>
        <h2>Quizical</h2>
        <p>Test your skills</p>
        <button onClick={props.showGame}>Start Game</button>
      </>
    )
  }