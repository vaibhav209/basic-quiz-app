import { useState } from "react";
import styles from "./QuizSet.module.css";


const QuizSet = () => {

  const [currentquestion, SetCurrentQuestion] = useState(0);
  const [correctMsg, SetCorrectMsg] = useState(false);
  const [wrongMsg, SetWrongMsg] = useState(false);

  // const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");


  const questions = [
    {
      text: "How many elements can a valid react component return?",
      options: [
        { id: 0, text: "React doesn't return element", isCorrect: false },
        { id: 1, text: "1 Element", isCorrect: true },
        { id: 2, text: "More than 1 element", isCorrect: false },
        { id: 3, text: "None of the mentioned", isCorrect: false },
      ],
    },
    {
      text: "What is the default port where webpack-server runs?",
      options: [
        { id: 0, text: "3000", isCorrect: false },
        { id: 1, text: "8080", isCorrect: true },
        { id: 2, text: "3030", isCorrect: false },
        { id: 3, text: "6060", isCorrect: false },
      ],
    },
    {
      text: "What are the two ways to handle data in React?",
      options: [
        { id: 0, text: "Services & Components", isCorrect: false },
        { id: 1, text: "State & Services", isCorrect: false },
        { id: 2, text: "State & Component", isCorrect: false },
        { id: 3, text: "State & Props", isCorrect: true },
      ],
    },
    {
      text: "Which of the following is method is not a part of ReactDOM?",
      options: [
        { id: 0, text: "ReactDOM.hydrate()", isCorrect: false },
        { id: 1, text: "ReactDOM.destroy()", isCorrect: true },
        { id: 2, text: "ReactDOM.createPortal()", isCorrect: false },
        { id: 3, text: "All of the mentioned", isCorrect: false },
      ],
    },
    {
      text: "Which function is used to change the state of react component?",
      options: [
        { id: 0, text: "this.State{}", isCorrect: false },
        { id: 1, text: "this.setState", isCorrect: true },
        { id: 2, text: "this.setChangeState", isCorrect: false },
        { id: 3, text: "None of the Above", isCorrect: false },
      ],
    },
  ];
  

  const optionClicked = (isCorrect) => {
    // audio.play();
    SetWrongMsg(false);
    if (isCorrect) {
      SetCorrectMsg(true);
    } else {
      SetWrongMsg(true);
      SetCorrectMsg(false);
    }
  }

  const nextBtnHandler = ()=>{
    SetWrongMsg(false);
    SetCorrectMsg(false);
    
    if(currentquestion +1 < questions.length){
      SetCurrentQuestion(currentquestion +1);
    }
    
  }


  return (
    <div className={styles.wholeSection}>
      <div>
        <h1>React Quiz</h1>

        <div className={styles.questionCard}>
          <h2>Question {currentquestion + 1} out of {questions.length}</h2>
          <h3 className={styles.questionText}>{questions[currentquestion].text}</h3>

          <ul>
            {questions[currentquestion].options.map((option) =>
              <li key={option.id} onClick={() => { optionClicked(option.isCorrect) }}>{option.text}</li>
              
            )}
            <button className={styles.nextBtn} onClick={nextBtnHandler} >Next &raquo;</button>
          </ul>
          
         
          
            
        </div>

        
      </div>

      {correctMsg && <h2 style={{ color: 'green' }}>Your answer is correct!</h2>}
      {wrongMsg && <h2 style={{ color: 'red' }}>Your answer is Incorrect!</h2>}

    </div>
  )
};

export default QuizSet;



