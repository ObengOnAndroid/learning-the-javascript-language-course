var animal = "cat";
// animal = 'dog';

animal === "cat"
  ? console.log("You will be a cat herder.")
  : console.log("You will be a dog catcher.");

var job = animal === "cat" ? "cat herder" : "dog catcher";

// prettier-ignore
var job = (animal === "cat") ? "cat herder" : "dog catcher";
var abc = ((12%2)===0)? console.log("even!"):console.log("odd");

function isEven(num){
  if (num%2 ===0){
    return true
  }
  else{
    return false
  }
}

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#if...else_statement
//
// Truthy and falsy values are discussed here:
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
