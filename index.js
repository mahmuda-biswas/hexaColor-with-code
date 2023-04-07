window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const output = document.getElementById("output");
  const btn = document.getElementById("change-btn");
  const copyBtn = document.getElementById("copy-btn");

  btn.addEventListener("click", function () {
    const bgColor = generatorHexColor();
    output.value = bgColor;
    root.style.background = bgColor;
  });

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
    alert("It will be copied");
  });
}

function generatorHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
