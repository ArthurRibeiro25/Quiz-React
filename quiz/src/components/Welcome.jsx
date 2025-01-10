import Quiz from '../img/quiz.svg'
import './Welcome.css'


const Welcome = () => {
  return (
    <div id="welcome">
      <h2>Welcome!</h2>
        <p>click in the button below to get started:</p>
      <button>Start</button>
      <img src={Quiz} alt="quiz-beginning" />
    </div>
  )
}

export default Welcome
