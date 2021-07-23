import React, { useState } from "react";
import "./styles.css";
import bg from "/images/bg.png";
import happy from "/images/happy.png";
import unhappy from "/images/unhappy.png";

let dateInput = "";
let luckyNo = 0;
//var stores img div
const happyImgDiv = (
  <img alt="happyImage" src={happy} width="50%" height="10%" />
);
const unhappyImgDiv = (
  <img alt="unhappyImage" src={unhappy} width="50%" height="10%" />
);

export default function App() {
  //state to display privacy notice
  const [displayAlert, setDisplayAlert] = useState("flex");
  //state for result text and image
  const [displayResult, setDisplayResult] = useState(["", ""]);

  function checkBtnHandler(e) {
    //to stop refreshing page on submit form
    e.preventDefault();
    //to convert the date into small strings
    const dateArray = dateInput.split("-");
    let sum = 0;
    //to access each string
    dateArray.map((string) => {
      //to access each number in string and add into sum
      for (let i = 0; i < string.length; i++) {
        sum = sum + Number(string[i]);
      }
    });
    //check if sum divisible by lucky no.
    if (sum % Number(luckyNo) === 0) {
      setDisplayResult(["Hurray!! You are a lucky person!", happyImgDiv]);
    } else {
      setDisplayResult([
        "Oops!! Your birthday is not a lucky number!",
        unhappyImgDiv
      ]);
    }
  }

  return (
    <div className="App">
      {/* header section */}
      <div
        className="parallax"
        style={{
          minHeight: "100vh",
          backgroundAttachment: "fixed",
          backgroundImage: `url("${bg}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        <div className="titleOfPage">
          <h1>Is Your Birthday Lucky?</h1>
          <a href="#mainSection">scroll down to checkout</a>
        </div>
      </div>

      {/* body part of the page */}
      <section id="mainSection" className="section">
        {/* alertbox for privacy notice */}
        <div id="alertBox" style={{ display: `${displayAlert}` }}>
          <div className="notice">
            <strong>Privacy Notice!</strong> We are not storing your data.
          </div>

          <div
            onClick={() => {
              setDisplayAlert("none");
            }}
            style={{
              paddingLeft: "1rem",
              cursor: "pointer",
              fontSize: "0.5rem"
            }}
          >
            <span role="img" aria-labelledby="crossIcon">
              &#10060;
            </span>
          </div>
        </div>

        {/* form section for inputs */}
        <h2>Enter Your Birthdate and lucky number to continue...</h2>
        <form onSubmit={checkBtnHandler}>
          <label className="label" htmlFor="datePicker">
            Select your Birth date:
          </label>
          <input
            id="datePicker"
            onChange={(e) => {
              dateInput = e.target.value;
            }}
            type="date"
            required
          />
          <label className="label" htmlFor="luckyNo">
            Enter your Lucky Number:
          </label>
          <input
            id="luckyNo"
            min="1"
            step="1"
            required
            onChange={(e) => {
              luckyNo = e.target.value;
            }}
            type="number"
          />
          <button type="submit">check</button>
        </form>

        {/* output result section */}
        <div className="output">
          <div className="label">{displayResult[0]}</div>
          {displayResult[1]}
        </div>

        {/* footer section */}
        <footer>
          <ul>
            <li className="footerLink">
              <a href="https://github.com/AnkitaBagale">
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li className="footerLink">
              <a href="https://twitter.com/AnkitaB1108">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="footerLink">
              <a href="https://www.linkedin.com/in/ankita-bagale1108">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="footerLink">
              <a href="https://ankitabagale-portfolio.netlify.app/">
                <i className="fas fa-briefcase"></i>
              </a>
            </li>
          </ul>

          <div className="legacyText">
            © 2020 | ankitaB |{" "}
            <a
              href="#alertBox"
              onClick={() => {
                setDisplayAlert("flex");
              }}
              style={{ cursor: "pointer", color: "Black" }}
            >
              Privacy Policy
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}
