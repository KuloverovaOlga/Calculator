const display = document.querySelector(".calculator__display");
const buttons = Array.from(document.querySelectorAll(".calculator__button"));
const AC = document.querySelector(".calculator__button-AC");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let target = e.target;
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
        let a = eval(display.innerText).toFixed(0).toString().length;
        !Number.isInteger(eval(display.innerText))
          ? (display.innerText = eval(display.innerText).toFixed(9 - a))
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

// function toCamelCase(str){
//   return str.replace(/[-_](.)/g, (_, v) => v.toUpperCase());
//   }

//   console.log(toCamelCase('a-Cat-Is_cute'))

// function reverseWords(str) {
//   return arr = str.split(' ').map(item => item.split('').reverse().join('')).join(' ')

// }

// function spinWords(string){
//   return string.split(' ').map(word => {
//     if (word.length > 4) {
//       return word.split('').reverse().join('')
//     } else {
//       return word
//     }
//   }).join(' ')
// }

// function descendingOrder(n){
//   return String(n).split('').sort().reverse().join('')
//   }

//   console.log(descendingOrder(123456789))
