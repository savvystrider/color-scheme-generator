const inputColor = document.getElementById("input-color");
const inputScheme = document.getElementById("input-color-scheme");
const colorBtn = document.getElementById("color-btn");
const selection = document.getElementById("user-selection");

const column1 = document.getElementById("col-1");
const column2 = document.getElementById("col-2");
const column3 = document.getElementById("col-3");
const column4 = document.getElementById("col-4");
const column5 = document.getElementById("col-5");

const output1 = document.getElementById("output-1");
const output2 = document.getElementById("output-2");
const output3 = document.getElementById("output-3");
const output4 = document.getElementById("output-4");
const output5 = document.getElementById("output-5");

const colorSchemeArray = [
  {
    column: column1,
    output: output1,
  },
  {
    column: column2,
    output: output2,
  },
  {
    column: column3,
    output: output3,
  },
  {
    column: column4,
    output: output4,
  },
  {
    column: column5,
    output: output5,
  },
];

colorBtn.addEventListener("click", function () {
  let colorVar = inputColor.value.slice(1, 7);
  let schemeVar = inputScheme.value;

  selection.innerHTML = `
        <div>
            You chose: <strong>#${colorVar.toUpperCase()}</strong>
        </div>
        `;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorVar}&format=json&mode=${schemeVar}&count=5`
  )
    .then((response) => response.json())
    .then((data) => {
      colorSchemeArray.map((item, index) => {
        let hexColor = data.colors[index].hex.value;

        item.column.style.backgroundColor = hexColor;
        item.output.textContent = hexColor;
      });
    })
    .catch((error) => console.log(error));
});
