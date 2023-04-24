import React from 'react';
import style from './Result.module.scss';

type ResultType = {
    correct: number
    questions: {
        title: string
        variants: string[]
        correct: number
    }[]
}

const Result: React.FC<ResultType> = ({ correct, questions}) => {
  return (
    <div className={style.result}>
      <img alt="image" src="/img/winner.gif"/>
      <h2>You got {correct} out of {questions.length}</h2>
      <a href="index.html">
        <button>Try again</button>
      </a>
    </div>
  );
}

export default Result;