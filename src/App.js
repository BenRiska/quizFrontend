import React, { Component } from "react";
import Quiz from "./Quiz";
import "./css/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLanguage: "html",
      html: {
        name: "HTML",
        questions: [
          "What does HTML stand for?",
          "How many tags are in a regular element?",
          "What is the difference in an opening tag and a closing tag?",
          "< br  / > What type of tag is this?",
          "< body > Is this an opening tag or a closing tag?",
          "< / footer > Is this an opening tag or a closing tag?",
          "Where is the meta tag only found?",
          "Which is the correct way to tag an image?",
          "What is an element that does not have a closing tag called?",
          "Which of the following is an example of an empty element?",
        ],
        options: [
          ["Hyper Text Markup Language", "Hot Mail", "How to Make Lasagna"],
          ["1", "2", "3"],
          [
            "Opening tag has a / in front",
            "Closing tag has a / in front",
            "There is no difference",
          ],
          ["Break tag", "A broken one", "An opening tag"],
          ["Opening", "Closing", "Neither"],
          ["Opening", "Closing", "Neither"],
          ["The last page", "The home page", "The second page"],
          [
            'src="image.jpg/gif" alt="type some text"',
            'Src="image.jpg/gif” alt=”type some text”',
            "src=”image.jpg/gif”",
          ],
          ["Tag", "Empty element", "Closed element"],
          ["< img / >", "< img > < / img >", "< / img>"],
        ],
        answers: [
          "Hyper Text Markup Language",
          "2",
          "Closing tag has a / in front",
          "Break tag",
          "Opening",
          "Closing",
          "The home page",
          'Src="image.jpg/gif” alt=”type some text”',
          "Empty element",
          "&lt; img / &gt;",
        ],
      },
      css: {
        name: "CSS",
        questions: [
          "First off, what does CSS actually stand for?",
          "CSS styles can be introduced into your web page in any of three places. Which of the following is not one of them?",
          "Comments are done in CSS with what opening and closing symbols?",
          "What keyword is given to a rule to prevent other conflicting rules from overriding it?",
          "Which of these is proper CSS syntax?",
          "How would you go about adding a thin, black border to an element?",
          "When elements are positioned absolutely, they can be layered on top of one another. What property determines the stacking order for layered elements?",
          "In newer forms of HTML (XHTML 1.1 for example), the 'center' tag is deprecated. What is the CSS equivalent?",
          "Borders work differently for tables in HTML than in CSS. What is the main difference?",
          "Which of these CSS properties does not have an HTML equivalent?",
        ],
        options: [
          [
            "Casserole Style Sheets",
            "Cascading Style Sheets",
            "Catalan Style Sheets",
          ],
          [
            "In a properly-linked CSS file",
            "As a 'style' attribute in the target HTML element",
            "In an HTML comment before the target HTML element",
          ],
          [
            "!-- to open and --! to close",
            "/* to open and */ to close",
            "** to open and ** to close",
          ],
          ["!important", "!decisive!", "!final"],
          ["font.color(#000088);", "font color:#blue", "font-color:#000088;"],
          [
            "border-style:solid,1px,#000000;",
            "element-border:1px black;",
            "border:solid 1px #000000;",
          ],
          ["z-index", "z-position", "layer-order"],
          ["centering:on;", "center:true;", "text-align:center;"],
          [
            "In HTML, you can not set the width of the border",
            "HTML borders apply to all cells, CSS only to the outside",
            "You cannot actually create borders with HTML",
          ],
          [
            "font-weight:bold;",
            "text-decoration:underline;",
            "overflow:scroll;",
          ],
        ],
        answers: [
          "Cascading Style Sheets",
          "In an HTML comment before the target HTML element",
          "/* to open and */ to close",
          "!important",
          "font-color:#000088;",
          "border:solid 1px #000000;",
          "z-index",
          "text-align:center;",
          "HTML borders apply to all cells, CSS only to the outside",
          "overflow:scroll;",
        ],
      },
      javascript: {
        name: "Javascript",
        questions: [
          "Inside which HTML element do we put the JavaScript?",
          "What is the correct JavaScript syntax to change the content of the HTML element below?",
          "Where is the correct place to insert a JavaScript?",
          'What is the correct syntax for referring to an external script called "xxx.js"?',
          "The external JavaScript file must contain the <script> tag.",
          'How do you write "Hello World" in an alert box?',
          "How do you create a function in JavaScript?",
          'How do you call a function named "myFunction"?',
          "How to write an IF statement in JavaScript?",
          'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        ],
        example: [
          "",
          '<p id="demo">This is a demonstration.</p>',
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
        options: [
          ["<Script>", "<javascript>", "<scripting>"],
          [
            'document.getElementById("demo").innerHTML = "Hello World";',
            'document.getElementByName("demo").innerHTML = "Hello World";',
            '#demo.innerHTML = "Hello World";',
          ],
          [
            "The <head> Section",
            "The <body> Section",
            "Both the <head> and <body> section are correct",
          ],
          [
            '<script href="xxx.js">',
            '<script name="xxx.js">',
            '<script src="xxx.js">',
          ],
          ["True", "False", "Sometimes"],
          [
            'alertBox("Hello World!")',
            'msg("Hello World!")',
            'alert("Hello World!")',
          ],
          [
            "Function myFunction()",
            "Function = myFucntion()",
            "function:myFunction()",
          ],
          ["myFunction()", "call myFunction()", "call function myFunction()"],
          ["if (i === 5)", "if i === 5", "if i = 5"],
          ["if (i !== 5)", "if (i >= 5)", "if (i <> 5)"],
        ],
        answers: [
          "<Script>",
          'document.getElementById("demo").innerHTML = "Hello World";',
          "Both the <head> and <body> section are correct",
          '<script src="xxx.js">',
          "False",
          'alert("Hello World!")',
          "Function myFunction()",
          "myFunction()",
          "if (i === 5)",
          "if (i !== 5)",
        ],
      },
    };
  }

  handleChoice = (e) => {
    console.log(e.target);
    this.setState({
      currentLanguage: e.target.innerHTML.toLowerCase(),
    });
  };

  render() {
    return (
      <div className="app">
        <nav>
          <p>Front End Quiz</p>
          <a href="https://www.linkedin.com/in/ben-taylor-tech/">Find Me!</a>
        </nav>
        <div class="choices">
          <h3>Pick a Quiz</h3>
          <ul>
            <li onClick={(e) => this.handleChoice(e)}>HTML</li>
            <li onClick={(e) => this.handleChoice(e)}>CSS</li>
            <li onClick={(e) => this.handleChoice(e)}>Javascript</li>
          </ul>
        </div>
        <Quiz
          html={this.state.html}
          css={this.state.css}
          javascript={this.state.javascript}
          currentLang={this.state.currentLanguage}
        />
        <footer>Ben Taylor Engineering &copy;</footer>
      </div>
    );
  }
}

export default App;
