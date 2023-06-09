const display = document.querySelector(".calculator__display");
const buttons = Array.from(document.querySelectorAll(".calculator__button"));
const AC = document.querySelector(".calculator__button-AC");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let target = e.target
    switch (target.innerText) {
      case "C":
      case "AC":
        display.innerText = "0";
        AC.innerText = "AC";
        break;

      case "⁺∕₋":
        display.innerText.startsWith("-")
          ? (display.innerText = Math.abs(+display.innerText))
          : (display.innerText = `-${display.innerText}`);
        AC.innerText = "C";
        break;

      case "%":
        let passedText = display.innerText / 100;
        display.innerText = passedText;
        AC.innerText = "C";
        break;

      case "÷":
        display.innerText += "/";
        AC.innerText = "C";
        break;

      case "×":
        display.innerText += "*";
        AC.innerText = "C";
        break;

      case ",":
        display.innerText.includes(".")
          ? (display.innerText += "")
          : (display.innerText += ".");
        AC.innerText = "C";
        break;

      case "=":
        let a = eval(display.innerText).toString().length;
        a > 9
          ? (display.innerText = eval(display.innerText).toFixed(8))
          : (display.innerText = eval(display.innerText));
        AC.innerText = "C";

        break;
      default:
        display.innerText === "0" && target.innerText !== ","
          ? (display.innerText = target.innerText)
          : (display.innerText += target.innerText);
        AC.innerText = "C";
    }
  });
});
