// let numbersEasy = [...Array(10).keys()];
// let operations = ["+", "-", "*", "/"];
// let numbersNormal = [...Array(20).keys()];
// let numbersHard = [...Array(100).keys()];

// export function createQuestion() {
//   setOperationOne(operations[Math.floor(Math.random() * operations.length)]);
//   setOperationTwo(operations[Math.floor(Math.random() * operations.length)]);
//   setResultsGame("");
//   setCounterQuestions(10);
//   setResultReceived("");

//   if (difficulty === "Fácil") {
//     setNumberOne(numbersEasy[Math.floor(Math.random() * numbersEasy.length)]);
//     setNumberTwo(numbersEasy[Math.floor(Math.random() * numbersEasy.length)]);
//     setNumberThree(numbersEasy[Math.floor(Math.random() * numbersEasy.length)]);

//     if (operationOne === "+") {
//       setResultExpected(numberOne + numberTwo);
//       setQuestionAsk(`${numberOne} + ${numberTwo}`);
//     }

//     if (operationOne === "-") {
//       setResultExpected(numberOne - numberTwo);
//       setQuestionAsk(`${numberOne} - ${numberTwo}`);
//     }

//     if (operationOne === "*") {
//       setResultExpected(numberOne * numberTwo);
//       setQuestionAsk(`${numberOne} * ${numberTwo}`);
//     }

//     if (operationOne === "/") {
//       setResultExpected(Math.floor(numberOne / (numberTwo + 1)));
//       setQuestionAsk(`${numberOne} / ${numberTwo + 1}`);
//     }

//     // Ultrapassar os 20 Pontos
//     if (operationOne === "+" && operationTwo === "+" && correct >= 20) {
//       setResultExpected(numberOne + numberTwo + numberThree);
//       setQuestionAsk(`${numberOne} + ${numberTwo} + ${numberThree}`);
//     }

//     if (operationOne === "+" && operationTwo === "-" && correct >= 20) {
//       setResultExpected(numberOne + numberTwo - numberThree);
//       setQuestionAsk(`${numberOne} + ${numberTwo} - ${numberThree}`);
//     }

//     if (operationOne === "+" && operationTwo === "*" && correct >= 20) {
//       setResultExpected(numberOne + numberTwo * numberThree);
//       setQuestionAsk(`${numberOne} + ${numberTwo} * ${numberThree}`);
//     }

//     if (operationOne === "+" && operationTwo === "/" && correct >= 20) {
//       setResultExpected(
//         Math.floor((numberOne + numberTwo) / (numberThree + 1))
//       );
//       setQuestionAsk(`(${numberOne} + ${numberTwo}) / ${numberThree + 1}`);
//     }

//     if (operationOne === "-" && operationTwo === "+" && correct >= 20) {
//       setResultExpected(numberOne - numberTwo + numberThree);
//       setQuestionAsk(`${numberOne} - ${numberTwo} + ${numberThree}`);
//     }

//     if (operationOne === "-" && operationTwo === "-" && correct >= 20) {
//       setResultExpected(numberOne - numberTwo - numberThree);
//       setQuestionAsk(`${numberOne} - ${numberTwo} - ${numberThree}`);
//     }

//     if (operationOne === "-" && operationTwo === "*" && correct >= 20) {
//       setResultExpected(numberOne - numberTwo * numberThree);
//       setQuestionAsk(`${numberOne} - ${numberTwo} * ${numberThree}`);
//     }

//     if (operationOne === "-" && operationTwo === "/" && correct >= 20) {
//       setResultExpected(
//         Math.floor((numberOne - numberTwo) / (numberThree + 1))
//       );
//       setQuestionAsk(`(${numberOne} - ${numberTwo}) / ${numberThree + 1}`);
//     }

//     if (operationOne === "*" && operationTwo === "+" && correct >= 20) {
//       setResultExpected(numberOne * numberTwo + numberThree);
//       setQuestionAsk(`${numberOne} * ${numberTwo} + ${numberThree}`);
//     }

//     if (operationOne === "*" && operationTwo === "-" && correct >= 20) {
//       setResultExpected(numberOne * numberTwo - numberThree);
//       setQuestionAsk(`${numberOne} * ${numberTwo} - ${numberThree}`);
//     }

//     if (operationOne === "*" && operationTwo === "*" && correct >= 20) {
//       setResultExpected(numberOne * numberTwo * numberThree);
//       setQuestionAsk(`${numberOne} * ${numberTwo} * ${numberThree}`);
//     }

//     if (operationOne === "*" && operationTwo === "/" && correct >= 20) {
//       setResultExpected(
//         Math.floor((numberOne * numberTwo) / (numberThree + 1))
//       );
//       setQuestionAsk(`(${numberOne} * ${numberTwo}) / ${numberThree + 1}`);
//     }

//     if (operationOne === "/" && operationTwo === "+" && correct >= 20) {
//       setResultExpected(
//         Math.floor(numberOne / Math.floor(numberTwo + 1 + numberThree))
//       );
//       setQuestionAsk(`${numberOne} / (${numberTwo + 1} + ${numberThree})`);
//     }

//     if (operationOne === "/" && operationTwo === "-" && correct >= 20) {
//       setResultExpected(
//         Math.floor(numberOne / Math.floor(numberTwo + 1 - numberThree))
//       );
//       setQuestionAsk(`${numberOne} / (${numberTwo + 1} - ${numberThree})`);
//     }

//     if (operationOne === "/" && operationTwo === "*" && correct >= 20) {
//       setResultExpected(
//         Math.floor(numberOne / Math.floor((numberTwo + 1) * (numberThree + 1)))
//       );
//       setQuestionAsk(`${numberOne} / (${numberTwo + 1} * ${numberThree + 1})`);
//     }

//     if (operationOne === "/" && operationTwo === "/" && correct >= 20) {
//       setResultExpected(
//         Math.floor(numberOne / (numberTwo + 1) / (numberThree + 1))
//       );
//       setQuestionAsk(`${numberOne} / ${numberTwo + 1} / ${numberThree + 1}`);
//     }
//   }

//   if (difficulty === "Normal") {
//     setNumberOne(
//       numbersNormal[Math.floor(Math.random() * numbersNormal.length)]
//     );
//     setNumberTwo(
//       numbersNormal[Math.floor(Math.random() * numbersNormal.length)]
//     );
//     setNumberThree(
//       numbersNormal[Math.floor(Math.random() * numbersNormal.length)]
//     );

//     if (operationOne === "+") {
//       setResultExpected(numberOne + numberTwo);
//       setQuestionAsk(`${numberOne} + ${numberTwo}`);
//     }

//     if (operationOne === "-") {
//       setResultExpected(numberOne - numberTwo);
//       setQuestionAsk(`${numberOne} - ${numberTwo}`);
//     }

//     if (operationOne === "*") {
//       setResultExpected(numberOne * numberTwo);
//       setQuestionAsk(`${numberOne} * ${numberTwo}`);
//     }

//     if (operationOne === "/") {
//       setResultExpected(Math.floor(numberOne / (numberTwo + 1)));
//       setQuestionAsk(`${numberOne} / ${numberTwo + 1}`);
//     }

//     // Ultrapassar os 10 Pontos
//     if (operationOne === "+" && operationTwo === "+") {
//       setResultExpected(numberOne + numberTwo + numberThree);
//       setQuestionAsk(`${numberOne} + ${numberTwo} + ${numberThree}`);
//     }

//     if (operationOne === "+" && operationTwo === "-" && correct >= 10) {
//       setResultExpected(numberOne + numberTwo - numberThree);
//       setQuestionAsk(`${numberOne} + ${numberTwo} - ${numberThree}`);
//     }

//     if (operationOne === "+" && operationTwo === "*" && correct >= 10) {
//       setResultExpected(numberOne + numberTwo * numberThree);
//       setQuestionAsk(`${numberOne} + ${numberTwo} * ${numberThree}`);
//     }

//     if (operationOne === "+" && operationTwo === "/" && correct >= 10) {
//       setResultExpected(
//         Math.floor((numberOne + numberTwo) / (numberThree + 1))
//       );
//       setQuestionAsk(`(${numberOne} + ${numberTwo}) / ${numberThree + 1}`);
//     }

//     if (operationOne === "-" && operationTwo === "+" && correct >= 10) {
//       setResultExpected(numberOne - numberTwo + numberThree);
//       setQuestionAsk(`${numberOne} - ${numberTwo} + ${numberThree}`);
//     }

//     if (operationOne === "-" && operationTwo === "-" && correct >= 10) {
//       setResultExpected(numberOne - numberTwo - numberThree);
//       setQuestionAsk(`${numberOne} - ${numberTwo} - ${numberThree}`);
//     }

//     if (operationOne === "-" && operationTwo === "*" && correct >= 10) {
//       setResultExpected(numberOne - numberTwo * numberThree);
//       setQuestionAsk(`${numberOne} - ${numberTwo} * ${numberThree}`);
//     }

//     if (operationOne === "-" && operationTwo === "/" && correct >= 10) {
//       setResultExpected(
//         Math.floor((numberOne - numberTwo) / (numberThree + 1))
//       );
//       setQuestionAsk(`(${numberOne} - ${numberTwo}) / ${numberThree + 1}`);
//     }

//     if (operationOne === "*" && operationTwo === "+" && correct >= 10) {
//       setResultExpected(numberOne * numberTwo + numberThree);
//       setQuestionAsk(`${numberOne} * ${numberTwo} + ${numberThree}`);
//     }

//     if (operationOne === "*" && operationTwo === "-" && correct >= 10) {
//       setResultExpected(numberOne * numberTwo - numberThree);
//       setQuestionAsk(`${numberOne} * ${numberTwo} - ${numberThree}`);
//     }

//     if (operationOne === "*" && operationTwo === "*" && correct >= 10) {
//       setResultExpected(numberOne * numberTwo * numberThree);
//       setQuestionAsk(`${numberOne} * ${numberTwo} * ${numberThree}`);
//     }

//     if (operationOne === "*" && operationTwo === "/" && correct >= 10) {
//       setResultExpected(
//         Math.floor((numberOne * numberTwo) / (numberThree + 1))
//       );
//       setQuestionAsk(`(${numberOne} * ${numberTwo}) / ${numberThree + 1}`);
//     }

//     if (operationOne === "/" && operationTwo === "+" && correct >= 10) {
//       setResultExpected(
//         Math.floor(numberOne / Math.floor(numberTwo + 1 + numberThree))
//       );
//       setQuestionAsk(`${numberOne} / (${numberTwo + 1} + ${numberThree})`);
//     }

//     if (operationOne === "/" && operationTwo === "-" && correct >= 10) {
//       setResultExpected(
//         Math.floor(numberOne / Math.floor(numberTwo + 1 - numberThree))
//       );
//       setQuestionAsk(`${numberOne} / (${numberTwo + 1} - ${numberThree})`);
//     }

//     if (operationOne === "/" && operationTwo === "*" && correct >= 10) {
//       setResultExpected(
//         Math.floor(numberOne / Math.floor((numberTwo + 1) * (numberThree + 1)))
//       );
//       setQuestionAsk(`${numberOne} / (${numberTwo + 1} * ${numberThree + 1})`);
//     }

//     if (operationOne === "/" && operationTwo === "/" && correct >= 10) {
//       setResultExpected(
//         Math.floor(numberOne / (numberTwo + 1) / (numberThree + 1))
//       );
//       setQuestionAsk(`${numberOne} / ${numberTwo + 1} / ${numberThree + 1}`);
//     }
//   }

//   if (difficulty === "Difícil") {
//     setNumberOne(numbersHard[Math.floor(Math.random() * numbersHard.length)]);
//     setNumberTwo(numbersHard[Math.floor(Math.random() * numbersHard.length)]);
//     setNumberThree(numbersHard[Math.floor(Math.random() * numbersHard.length)]);

//     if (operationOne === "+" && operationTwo === "+") {
//       setResultExpected(numberOne + numberTwo + numberThree);
//       setQuestionAsk(`${numberOne} + ${numberTwo} + ${numberThree}`);
//     }

//     if (operationOne === "+" && operationTwo === "-") {
//       setResultExpected(numberOne + numberTwo - numberThree);
//       setQuestionAsk(`${numberOne} + ${numberTwo} - ${numberThree}`);
//     }

//     if (operationOne === "+" && operationTwo === "*") {
//       setResultExpected(numberOne + numberTwo * numberThree);
//       setQuestionAsk(`${numberOne} + ${numberTwo} * ${numberThree}`);
//     }

//     if (operationOne === "+" && operationTwo === "/") {
//       setResultExpected(
//         Math.floor((numberOne + numberTwo) / (numberThree + 1))
//       );
//       setQuestionAsk(`(${numberOne} + ${numberTwo}) / ${numberThree + 1}`);
//     }

//     if (operationOne === "-" && operationTwo === "+") {
//       setResultExpected(numberOne - numberTwo + numberThree);
//       setQuestionAsk(`${numberOne} - ${numberTwo} + ${numberThree}`);
//     }

//     if (operationOne === "-" && operationTwo === "-") {
//       setResultExpected(numberOne - numberTwo - numberThree);
//       setQuestionAsk(`${numberOne} - ${numberTwo} - ${numberThree}`);
//     }

//     if (operationOne === "-" && operationTwo === "*") {
//       setResultExpected(numberOne - numberTwo * numberThree);
//       setQuestionAsk(`${numberOne} - ${numberTwo} * ${numberThree}`);
//     }

//     if (operationOne === "-" && operationTwo === "/") {
//       setResultExpected(
//         Math.floor((numberOne - numberTwo) / (numberThree + 1))
//       );
//       setQuestionAsk(`(${numberOne} - ${numberTwo}) / ${numberThree + 1}`);
//     }

//     if (operationOne === "*" && operationTwo === "+") {
//       setResultExpected(numberOne * numberTwo + numberThree);
//       setQuestionAsk(`${numberOne} * ${numberTwo} + ${numberThree}`);
//     }

//     if (operationOne === "*" && operationTwo === "-") {
//       setResultExpected(numberOne * numberTwo - numberThree);
//       setQuestionAsk(`${numberOne} * ${numberTwo} - ${numberThree}`);
//     }

//     if (operationOne === "*" && operationTwo === "*") {
//       setResultExpected(numberOne * numberTwo * numberThree);
//       setQuestionAsk(`${numberOne} * ${numberTwo} * ${numberThree}`);
//     }

//     if (operationOne === "*" && operationTwo === "/") {
//       setResultExpected(
//         Math.floor((numberOne * numberTwo) / (numberThree + 1))
//       );
//       setQuestionAsk(`(${numberOne} * ${numberTwo}) / ${numberThree + 1}`);
//     }

//     if (operationOne === "/" && operationTwo === "+") {
//       setResultExpected(
//         Math.floor(numberOne / Math.floor(numberTwo + 1 + numberThree))
//       );
//       setQuestionAsk(`${numberOne} / (${numberTwo + 1} + ${numberThree})`);
//     }

//     if (operationOne === "/" && operationTwo === "-") {
//       setResultExpected(
//         Math.floor(numberOne / Math.floor(numberTwo + 1 - numberThree))
//       );
//       setQuestionAsk(`${numberOne} / (${numberTwo + 1} - ${numberThree})`);
//     }

//     if (operationOne === "/" && operationTwo === "*") {
//       setResultExpected(
//         Math.floor(numberOne / Math.floor((numberTwo + 1) * (numberThree + 1)))
//       );
//       setQuestionAsk(`${numberOne} / (${numberTwo + 1} * ${numberThree + 1})`);
//     }

//     if (operationOne === "/" && operationTwo === "/") {
//       setResultExpected(
//         Math.floor(numberOne / (numberTwo + 1) / (numberThree + 1))
//       );
//       setQuestionAsk(`${numberOne} / ${numberTwo + 1} / ${numberThree + 1}`);
//     }
//   }
// }
