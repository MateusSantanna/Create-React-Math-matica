import { InputAnswer } from "./style";

function Questions({
  setResultsGame,
  resultExpected,
  resultReceived,
  setResultReceived,
  chances,
  setChances,
  correct,
  setCorrect,
  questionAsk,
}) {
  function checkAnswer() {
    if (resultExpected === +resultReceived) {
      setResultsGame("Resposta Correta");
      setCorrect(correct + 1);
    }

    if (resultExpected !== +resultReceived || resultReceived === "") {
      setResultsGame("Resposta Errada");
      setChances(chances - 1);
    }
  }

  return (
    <>
      <InputAnswer>
        <h1>Pergunta</h1>
        <h1>{questionAsk}</h1>
        <input
          required
          type="number"
          value={resultReceived}
          onChange={(e) => setResultReceived(e.target.value)}
        />
      </InputAnswer>

      <div></div>

      <button onClick={() => checkAnswer()}>Confirmar</button>
    </>
  );
}

export default Questions;
