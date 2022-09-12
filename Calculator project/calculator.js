"use strict";

let result = document.querySelector(".inputtext");

let Calculator = (number) => {
  result.value += number;
};

let result_show = () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("Enter the valid input");
  }
};

function clr() {
  result.value = " ";
}

function del() {
  result.value = result.value.slice(0, -1);
}
