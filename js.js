"use strict";
let num1, num2, op, i;
i = 0;
const show = (num) => {
  document.getElementById("num").value += num;
};
const sefr = () => {
  if (document.getElementById("num").value == "") {
    document.getElementById("num").value += "0";
  } else if (document.getElementById("num").value !== "0"){
    document.getElementById("num").value += "0";
  }
};
const momayez = () => {
  if (i == 0) {
    document.getElementById("num").value += ".";
    i++;
  }
};
const clear1 = () => {
  document.getElementById("num").value = "";
  i = 0;
  num1 = "";
  num2 = "";
  op = "";
};

const bezafe = () => {
  num1 = Number(document.getElementById("num").value);
  document.getElementById("num").value = "";
  op = "+";
  i = 0;
};
const menha = () => {
  num1 = Number(document.getElementById("num").value);
  document.getElementById("num").value = "";
  op = "-";
  i = 0;
};
const zarb = () => {
  num1 = Number(document.getElementById("num").value);
  document.getElementById("num").value = "";
  op = "*";
  i = 0;
};
const taghsim = () => {
  num1 = Number(document.getElementById("num").value);
  document.getElementById("num").value = "";
  op = "/";
  i = 0;
};
const mosavi = () => {
  let answer;
  num2 = Number(document.getElementById("num").value);
  if (op == "+") {
    answer = num1 + num2;
  } else if (op == "-") {
    answer = num1 - num2;
  } else if (op == "*") {
    answer = num1 * num2;
  } else if (op == "/") {
    answer = num1 / num2;
  } else {
    num1 = Number(document.getElementById("num").value);
    answer = num1;
  }
  document.getElementById("num").value = answer;
  i = 0;
  op = "";
};
