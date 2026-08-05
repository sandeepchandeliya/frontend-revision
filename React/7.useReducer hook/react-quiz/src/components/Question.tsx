export default function Question({
  question,
}: {
  question: { question: string; options: string[] };
}) {
  console.log(question);
  return (
    <>
      <div>
        <h3>{question.question}</h3>
        <div className="options">
          {question.options.map((option) => (
            <button className="btn btn-option" key={option}>
              {option}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
