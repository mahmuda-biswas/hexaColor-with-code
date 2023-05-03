let div = null;
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const output = document.getElementById("output");
  const output2 = document.getElementById("output2");
  const btn = document.getElementById("change-btn");
  const copyBtn = document.getElementById("copy-btn");
  const copyBtn2 = document.getElementById("copy-btn2");

  btn.addEventListener("click", function () {
    const color = generateColorDecimal();
    const bgColor = generatorHexColor(color);
    const bgColorRGB = generateRGBColor(color);
    output.value = bgColor.substring(1);
    output2.value = bgColorRGB;
    root.style.backgroundColor = bgColor;
  });

  // copy hex color code
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(`#${output.value}`);
    if (div !== null) {
      div.remove();
      div = null;
    }
    if (isValidHex(output.value)) {
      generateTostMassage(`#${output.value} copied`);
    } else {
      alert("Invalid Color Code");
    }
  });

  // copy rgb color code
  copyBtn2.addEventListener("click", function () {
    navigator.clipboard.writeText(`#${output2.value}`);
    if (div !== null) {
      div.remove();
      div = null;
    }
    if (isValidHex(output.value)) {
      generateTostMassage(`#${output2.value} copied`);
    } else {
      alert("Invalid Color Code");
    }
  });

  output.addEventListener("keyup", function (e) {
    const color = e.target.value;
    if (color) {
      output.value = color.toUpperCase();
      if (isValidHex(color)) {
        root.style.backgroundColor = `#${color}`;
        output2.value = hexToRGB(color);
      }
    }
  });
}

// function 1 - generator decimal color code

function generateColorDecimal() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return {
    red,
    green,
    blue,
  };
}

// function2 - generate hex color  code
function generatorHexColor({ red, green, blue }) {
  // const { red, green, blue } = generateColorDecimal();
  const getTowCode = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };

  return `#${getTowCode(red)}${getTowCode(green)}${getTowCode(
    blue
  )}`.toUpperCase();
}

// function - 3  = generate rgb color ;

function generateRGBColor({ red, green, blue }) {
  // const { red, green, blue } = generateColorDecimal();
  return `rgba(${red}, ${green}, ${blue})`;
}

/**
 *
 * @param {string} hex
 */

function hexToRGB(hex) {
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4), 16);
  return `rgb(${red}, ${green}, ${blue})`;
}

console.log(hexToRGB("3CACBD"));

function generateTostMassage(msg) {
  div = document.createElement("div");
  div.innerText = msg;
  div.className = "toast-message toast-message-slide-in";

  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");

    div.addEventListener("animationend", function () {
      div.remove();
      div = null;
    });
  });

  document.body.appendChild(div);
}
/**
 *@param {String} color:;
 */
function isValidHex(color) {
  if (color.length !== 6) return false;
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}
