import React, { Component } from "react";
// import "./Quiz.css";

class Quiz extends Component {
  state = {
    questions: [],
    currentQuestionIndex: 0,
    selectedAnswerIndex: null,
    isBackButtonDisabled: true,
    isNextButtonDisabled: true,
    isLastQuestion: false,
  };

  async componentDidMount() {
    try {
      const response = await fetch("https://api.frontendexpert.io/api/fe/quiz");
      const questions = await response.json();
      this.setState({ questions });
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
    }
  }

  handleAnswerClick = (answerIndex) => {
    this.setState({
      selectedAnswerIndex: answerIndex,
      isNextButtonDisabled: false,
    });
  };

  handleNextButtonClick = () => {
    const { currentQuestionIndex, questions, selectedAnswerIndex } = this.state;

    if (selectedAnswerIndex !== null) {
      this.setState({
        currentQuestionIndex: currentQuestionIndex + 1,
        selectedAnswerIndex: null,
        isBackButtonDisabled: false,
        isNextButtonDisabled: true,
        isLastQuestion: currentQuestionIndex === questions.length - 1,
      });
    }
  };

  handleBackButtonClick = () => {
    const { currentQuestionIndex } = this.state;

    this.setState({
      currentQuestionIndex: currentQuestionIndex - 1,
      isLastQuestion: false,
    });
  };

  render() {
    const {
      questions,
      currentQuestionIndex,
      selectedAnswerIndex,
      isBackButtonDisabled,
      isNextButtonDisabled,
      isLastQuestion,
    } = this.state;

    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div className="quiz-container">
        <h1>{currentQuestion && currentQuestion.question}</h1>
        <div className="answers">
          {currentQuestion &&
            currentQuestion.answer.map((answer, index) => (
              <h2
                key={index}
                onClick={() => this.handleAnswerClick(index)}
                className={`answer ${
                  selectedAnswerIndex === index
                    ? index === currentQuestion.correctAnswer
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
              >
                {answer}
              </h2>
            ))}
        </div>
        <div className="buttons">
          <button
            onClick={this.handleBackButtonClick}
            disabled={isBackButtonDisabled}
          >
            Back
          </button>
          <button
            onClick={this.handleNextButtonClick}
            disabled={isNextButtonDisabled || isLastQuestion}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Quiz;
