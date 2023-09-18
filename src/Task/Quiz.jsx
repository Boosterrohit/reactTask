import React, { useState, useEffect } from "react";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isNextEnabled, setIsNextEnabled] = useState(false);
  const [isBackEnabled, setIsBackEnabled] = useState(false);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((response) => response.json())
      .then((data) => {
        const formattedQuestions = data.results.map((question) => {
          const answers = [
            ...question.incorrect_answers,
            question.correct_answer,
          ];
          return {
            question: question.question,
            answers: shuffleArray(answers),
            correctAnswer: [answers.indexOf(question.correct_answer)],
          };
        });
        setQuestions(formattedQuestions);
        setIsBackEnabled(false);
      });
  }, []);

  useEffect(() => {
    setIsBackEnabled(currentIndex > 0);
    setIsNextEnabled(selectedAnswers.length > 0);
  }, [currentIndex, selectedAnswers]);

  const handleAnswerClick = (answerIndex) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    if (updatedSelectedAnswers.includes(answerIndex)) {
      updatedSelectedAnswers.splice(
        updatedSelectedAnswers.indexOf(answerIndex),
        1
      );
    } else {
      updatedSelectedAnswers.push(answerIndex);
    }
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const handleNextClick = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswers([]);
    }
  };

  const handleBackClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedAnswers([]);
    }
  };

  function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  if (questions.length === 0 || currentIndex >= questions.length) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="quiz"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "140px",
      }}
    >
      <div
        style={{
          borderRadius: "15px",
          backgroundColor: "white",
          padding: "10px 45px",
          width: "50%",
          height: "70%",
        }}
      >
        <p style={{ textAlign: "center" }}>
          {questions[currentIndex].question}
        </p>
        <ul style={{ listStyleType: "none" }}>
          {questions[currentIndex].answers.map((answer, index) => (
            <li
              key={index}
              className={`answer ${
                selectedAnswers.includes(index) ? "selected" : ""
              } ${
                selectedAnswers.includes(index) &&
                questions[currentIndex].correctAnswer.includes(index)
                  ? "correct"
                  : ""
              } ${
                selectedAnswers.includes(index) &&
                !questions[currentIndex].correctAnswer.includes(index)
                  ? "incorrect"
                  : ""
              }`}
              onClick={() => handleAnswerClick(index)}
            >
              <input
                type="checkbox"
                checked={selectedAnswers.includes(index)}
                readOnly
              />
              {answer}
            </li>
          ))}
        </ul>
        <div className="buttons">
          <button
            className="back"
            disabled={!isBackEnabled}
            onClick={handleBackClick}
          >
            Back
          </button>
          <button
            className="next"
            disabled={!isNextEnabled}
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
