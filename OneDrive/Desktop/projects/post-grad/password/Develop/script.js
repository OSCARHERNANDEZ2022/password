// Getting the DOM Elements

const resultDom = document.getElementById("result");
const copybtnDom = document.getElementById("copy");
const lengthDom = document.getElementById("length");
const uppercaseDOM = document.getElementById("uppercase");
const numbersDOM = document.getElementById("numbers");
const symbolDOM = document.getElementById("symbol");
const generatebtn = document.getElementById("generate");
const form = document.getElementById("passwordGeneratorForm");

// Generating Character Codes For The Application

const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = arrayFromLowToHight(97, 122);
const NUMBER_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh (58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHih(123, 126));