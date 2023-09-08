import './App.css'
import React, { useState, useEffect } from 'react';

function App() {

    const [questions, setQuestions] = useState([{question: '', incorrect_answers:[], correct_answer: ''}]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
      console.log("useEffect Fired")
      const fetchData = async () => {
        try {
          // Fetch data from your Express server's /api endpoint
          const response = await fetch('http://localhost:5005/api'); // Use the relative path to your Express server
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          // Data received from the server
          console.log(data);
    
          // Update questions state with the fetched data
          setQuestions(data.results);
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchData();
    }, []);
    
    

    const handleAnswerOptionClick = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 1);
      }

      const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length){
          setCurrentQuestion(nextQuestion);
      } else {
          setShowScore(true);
      }
    };

  return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
			) : (
				<>
        <h1 className='title'>Vehicle Trivia</h1>

					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>
            {questions[currentQuestion].question}
            {questions.length > 0 && questions[currentQuestion].questionText}
            </div>
            
					</div>
					<div className='answer-section'>
            {questions[currentQuestion].incorrect_answers.map((answerOption) => (
              <button onClick={() => handleAnswerOptionClick(answerOption)}>{answerOption}</button>
            ))}
					</div>
				</>
			)}
		</div>
	);
}

export default App
