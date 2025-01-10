import { useContext } from "react"
import { QuizContext } from "../context/quiz.jsx"

import WellDone from '../img/welldone.svg'

import './GameOver.css'

function GameOver() {

    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <div id="gameover">
            <h2>Game Over</h2>
            <p>Score: {quizState.score}</p>
            <p>You`ve answered correctly {quizState.score} of {quizState.questions.length} questions!</p>
            <img src={WellDone} alt="WellDone-img" />
            <button onClick={() => dispatch({type: "NEW_GAME"})}>Restart</button>
        </div>
  )
}

export default GameOver
