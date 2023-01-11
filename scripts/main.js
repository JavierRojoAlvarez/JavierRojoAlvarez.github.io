/*
let myVariable;
myVariable = "Hello World!"

const myHeading = document.querySelector("h1");
myHeading.textContent = myVariable;


function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

  document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });
*/
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/laetitia.jpg") {
    myImage.setAttribute("src", "images/alicia-silverstone.jpg");
  } else {
    myImage.setAttribute("src", "images/laetitia.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };

