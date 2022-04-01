import React, {useState} from 'react';
import './App.css';
import Questions from "./Questions/Questions";

function App() {
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [value, setValue] = useState<string>('');
  const Question = Questions[question];
  const onNext = () => {
      setAnswers([...answers, value]);
      setQuestion(question+1);
  };
    const onSave = () => {
        setAnswers([...answers, value]);
        alert("Answers are:"+answers.map((a,i) => i+1+": "+a).join(", "));
    };
  return (
    <div className="App">
      <h1>Question {question+1}</h1>
      <Question answered={value => setValue(value)}/>
      {question < (Questions.length-1)  && <button onClick={onNext}>NEXT</button>}
      {question === (Questions.length-1)  && <button onClick={onSave}>SAVE</button>}
      <h2>Value: {value}</h2>
      <h2>Answers:</h2>
      {answers.map((answer, i) => <div>Answer{i}: {answer}</div>)}
    </div>
  );
}

export default App;
