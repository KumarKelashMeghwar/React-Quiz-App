import React, { useState, useEffect } from "react";
import "./style.css";

const Quiz = () => {
  const [nextQuestion, setNextQuestion] = useState(0);
  const updates = React.useRef(1);
  let score = 0;

  const Questions = [
    {
      questionText: "What is my name?",
      answerOptions: [
        { answerText: "Kelash", isCorrect: "true" },
        { answerText: "Karan", isCorrect: "false" },
        { answerText: "Kamlesh", isCorrect: "false" },
        { answerText: "Kajol", isCorrect: "false" },
      ],
    },
    {
      questionText: "What is name of my country?",
      answerOptions: [
        { answerText: "England", isCorrect: "false" },
        { answerText: "India", isCorrect: "false" },
        { answerText: "France", isCorrect: "false" },
        { answerText: "Pakistan", isCorrect: "true" },
      ],
    },
    {
      questionText: "What will be my favorite pet?",
      answerOptions: [
        { answerText: "Dog", isCorrect: "false" },
        { answerText: "Cat", isCorrect: "false" },
        { answerText: "Rabbit", isCorrect: "true" },
        { answerText: "Parrot", isCorrect: "false" },
      ],
    },
    {
      questionText: "When did I born?",
      answerOptions: [
        { answerText: "19th August 2001", isCorrect: "false" },
        { answerText: "15th May 2002", isCorrect: "true" },
        { answerText: "3rd December 1999", isCorrect: "false" },
        { answerText: "1st April 2001", isCorrect: "false" },
      ],
    },
  ];

  const hideElements = () => {
    document.querySelector(".btns_container").classList.add("hide");
    document.querySelector(".question").classList.add("hide");
    document.querySelector(".next_btn").classList.add("hide");
  };

  const btnHandler = (e) => {
    let isCorrect = e.target.attributes.data_set.value;

    if (isCorrect === "true") {
      let btns = document.querySelectorAll(".btn");
      for (let i of btns) {
        i.setAttribute("disabled", "true");
      }
      score += updates.current++;
      document.body.style.backgroundColor = "green";
    } else {
      document.body.style.backgroundColor = "red";
      let btns = document.querySelectorAll(".btn");
      for (let i of btns) {
        i.setAttribute("disabled", "true");
      }
    }
  };

  const nextHandler = () => {
    document.body.style.backgroundColor = "#fff";

    if (nextQuestion < 3) {
      setNextQuestion(nextQuestion + 1);
    } else {
      hideElements();
      let replay = document.createElement("button");
      replay.innerText = "Replay";
      replay.style.padding = "15px 30px";
      replay.style.backgroundColor = "orange";
      replay.style.fontSize = "22px";
      replay.style.border = "none";
      replay.style.outline = "none";
      replay.style.borderRadius = "10px";
      replay.style.cursor = "pointer";

      replay.addEventListener("click", () => {
        window.location.reload();
      });

      let div = document.createElement("div");
      div.style.fontSize = "23px";
      div.style.textAlign = "center";
      div.style.lineHeight = "40px";
      div.style.color = "#fff";
      div.style.padding = "20px";
      div.style.marginBottom = "30px";
      div.innerText = `Thank you for playing this app. \n You score is ${score} out of ${Questions.length}.`;

      document.querySelector(".container").appendChild(div);
      document.querySelector(".container").appendChild(replay);
    }
  };

  const startGame = () => {
    document.querySelector(".question").classList.remove("hide");
    document.querySelector(".btns_container").classList.remove("hide");
    document.querySelector(".next_btn").classList.remove("hide");
    document.querySelector(".start_btn").style.display = "none";
  };

  useEffect(() => {
    hideElements();

    let startBtn = document.createElement("button");
    startBtn.classList.add("start_btn");
    startBtn.innerText = "Start Now";
    startBtn.style.backgroundColor = "orange";
    startBtn.style.padding = "16px 30px";
    startBtn.style.cursor = "pointer";
    startBtn.style.fontSize = "22px";
    startBtn.style.border = "none";
    startBtn.style.outline = "none";
    startBtn.style.borderRadius = "5px";
    document.querySelector(".container").appendChild(startBtn);

    startBtn.addEventListener("click", startGame);
  }, []);

  return (
    <>
      <div className="container">
        <div className="question">{Questions[nextQuestion].questionText}</div>
        <div className="btns_container">
          {Questions[nextQuestion].answerOptions.map((curElement) => (
            <button
              onClick={btnHandler}
              data_set={curElement.isCorrect}
              className="btn"
              key={Math.random()}
            >
              {curElement.answerText}
            </button>
          ))}
        </div>
        <button onClick={nextHandler} className="next_btn">
          Next
        </button>
      </div>
    </>
  );
};

export default Quiz;
