import React, { Component } from "react";

class Quiz extends Component {
  constructor(props) {
    super();
    this.state = {
      score: 0,
      length: props.html.questions.length,
      questions: props.html.questions,
      options: props.html.options,
      answers: props.html.answers,
      currentQuestion: 0,
      chosenOption: "",
      prompt: false,
      currentLang: props.currentLang,
    };
  }

  componentDidUpdate() {
    if (this.state.prompt) {
      setTimeout(() => this.setState({ prompt: false }), 3000);
    }
    if (this.props.currentLang !== this.state.currentLang) {
      this.setState({
        score: 0,
        length: this.props[this.props.currentLang].questions.length,
        questions: this.props[this.props.currentLang].questions,
        options: this.props[this.props.currentLang].options,
        answers: this.props[this.props.currentLang].answers,
        currentQuestion: 0,
        chosenOption: "",
        prompt: false,
        currentLang: this.props.currentLang,
      });
    }
  }

  renderOptions = () => {
    return this.state.options[this.state.currentQuestion].map((o) => (
      <li onClick={(e) => this.chooseOption(e)}>{o}</li>
    ));
  };

  chooseOption = (e) => {
    if (document.querySelector(".selected")) {
      var oldSelected = document.querySelector(".selected");
      oldSelected.className = "";
    }
    e.target.className = "selected";
    this.setState({
      chosenOption: e.target.innerHTML,
    });
  };

  submitOption = () => {
    if (document.querySelector(".selected")) {
      var oldSelected = document.querySelector(".selected");
      oldSelected.className = "";
    }
    if (this.state.chosenOption.length > 0) {
      if (
        this.state.answers[this.state.currentQuestion] ===
        this.state.chosenOption
      ) {
        this.setState({
          score: this.state.score + 1,
          currentQuestion: this.state.currentQuestion + 1,
          chosenOption: "",
        });
      } else if (
        this.state.answers[this.state.currentQuestion] !==
        this.state.chosenOption
      ) {
        this.setState({
          currentQuestion: this.state.currentQuestion + 1,
          chosenOption: "",
        });
      }
    } else {
      this.setState({
        prompt: true,
      });
    }
  };

  renderExamples = () => {
    return <p>{this.props.javascript.example[this.state.currentQuestion]}</p>;
  };

  restartGame = () => {
    this.setState({
      currentQuestion: 0,
      score: 0,
      chosenOption: "",
    });
  };

  render() {
    return (
      <div className="quiz">
        <h1 id="title">{this.props.currentLang.toUpperCase()}</h1>
        {this.state.currentQuestion !== this.state.questions.length ? (
          <div>
            <div id="question">
              <span>Question {this.state.currentQuestion + 1}/10:</span>
              {this.state.questions[this.state.currentQuestion]}
            </div>
            <div id="example">
              {this.state.currentLang === "javascript"
                ? this.renderExamples()
                : null}
            </div>
            <div id="options">
              <ul>{this.renderOptions()}</ul>
              <button id="submit" onClick={this.submitOption}>
                Submit
              </button>
            </div>
            <div className="prompt">
              {this.state.prompt ? "Please pick an option" : null}
            </div>
          </div>
        ) : (
          <div>
            <p>You scored {this.state.score}/10!</p>
            <p>
              Click <button onClick={this.restartGame}>Here</button> to restart
              the game.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Quiz;
