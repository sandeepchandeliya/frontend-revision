import type { QuestionProps } from '../types';

export default function Question({
  question,
  dispatch,
  answer,
}: QuestionProps) {
  const hasAnswered = answer !== null;
  // console.log(question);
  return (
    <>
      <div>
        <h3>{question.question}</h3>
        <div className="options">
          {question.options.map((option, index) => (
            <button
              className={`btn btn-option ${index === answer ? 'answer' : ''} 
                ${ hasAnswered ? index === question.correctOption ? 'correct' : 'wrong' :""}`
              }
              key={option}
              disabled={hasAnswered}
              onClick={() => dispatch({ type: 'newAnswer', payload: index })}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
