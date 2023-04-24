import React from "react";
import style from './Game.module.scss';

// Типизация V
type GameType = {
    question: {
        title: string
        variants: string[]
        correct: number
    }
    onClickVariant: (index: number) => void
    step: number
    questions: {
        title: string
        variants: string[]
        correct: number
    }[]
}


const Game: React.FC<GameType> = ({ question, onClickVariant, step, questions}) => {
  const persentage = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className={style.progress}>
        <div style={{ width: `${persentage}%` /* <= исправить чтобы показывало прогресс ответов на вопросы */ }} className={`${style.progress__inner}`}></div>
      </div>
      <h1>{question.title}</h1> {/* <= Почему-то не показывает title вопроса, исправить */}
      <ul>
        {
          question.variants.map((text: string, index: number) => <li
            onClick={() => onClickVariant(index)}
            key={text}>{text}</li>)
        }
      </ul>
    </>
  );
}

export default Game;