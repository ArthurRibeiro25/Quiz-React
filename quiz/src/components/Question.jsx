import { useContext } from 'react';
import { QuizContext } from "../context/quiz.jsx";

import Option from './Option.jsx'

import './Question.css'

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECKED_ANSWER",
      payload: {answer: currentQuestion.answer, option}
    })
  }

  console.log(quizState)

  return (
    <div id='question'>
      <p>Question {quizState.currentQuestion + 1} out of {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => ( 
        <Option 
            option={option} 
            key={option} 
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
          />
          ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continue</button>
      )}
    </div>
  )
}

export default Question
