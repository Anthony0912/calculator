const screen = document.getElementById("screen");
screen.focus();

let operator;
let data_1;
let data_2;
let result;

const deleteDataInScreen = () => {
  clear();
  reset();
};
const clear = () => {
  screen.value = "";
};

const reset = () => {
  operator = "";
  data_1 = 0;
  data_2 = 0;
  result = 0;
};

const deleteFinalString = () => {
  let data = screen.value;
  let newData = data.slice(0, -1);
  screen.value = newData;
};

const validationOnlyNumberAndSymbol = (event) => {
  try {
    const keyCode = event.which ? event.which : event.keyCode;
    if (keyCode > 31 && (keyCode < 46 || keyCode > 57)) {
      return false;
    }
    return true;
  } catch (e) {
    alert(e);
  }
};

const writeInScreen = (data) => {
  const { id } = data;
  if (id >= 0 || id <= 9) {
    screen.value = screen.value + id;
  }
};

const multiplication = () => {
  data_1 = screen.value;
  operator = "*";
  clear();
};

const residue = () => {
  data_1 = screen.value;
  operator = "%";
  clear();
};

const division = () => {
  data_1 = screen.value;
  operator = "/";
  clear();
};

const sum = () => {
  data_1 = screen.value;
  operator = "+";
  clear();
};

const subtraction = () => {
  data_1 = screen.value;
  operator = "-";
  clear();
};

const equal = () => {
  data_2 = screen.value;
  resolve();
};

const resolve = () => {
  switch (operator) {
    case "+":
      result = parseFloat(data_1) + parseFloat(data_2);
      break;
    case "-":
      result = parseFloat(data_1) - parseFloat(data_2);
      break;
    case "*":
      result = parseFloat(data_1) * parseFloat(data_2);
      break;
    case "/":
      if (data_2 > 0) {
        result = parseFloat(data_1) / parseFloat(data_2);
      } else {
        alert("No esposible dividir entre cero.");
        result = 0;
      }
      break;
  }
  screen.value = result;
  reset();
};
