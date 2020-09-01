let generateExpression = document.getElementById('generate-expression');
function generatePin() {
  generateExpression.value = ('' + Math.random()).substring(2, 6);
}

let checkExpression = document.getElementById('check-expression');
function writtenPin(button_name) {
  if (button_name == '=') {
    checkExpression.value = eval(checkExpression.value);
  }
  else if (button_name == 'C') {
    checkExpression.value = '';
  }
  else if (button_name == '<') {
    let string = checkExpression.value;
    checkExpression.value = string.substring(0, string.length - 1);
  }
  else {
    checkExpression.value = checkExpression.value + button_name;
    document.getElementById('check-expression').value = checkExpression.value;
  }
}
let tryCounter = 3;
document.getElementById('submit-button').addEventListener('click', function () {
  if(generateExpression.value==''){
    alert("Click 'Generate Pin' first.");
    document.getElementById('correct').style.display = 'none';
    document.getElementById('incorrect').style.display = 'none';
  }
  else if (checkExpression.value == generateExpression.value) {
    document.getElementById('correct').style.display = 'block';
    document.getElementById('incorrect').style.display = 'none';
  }
  else {
    document.getElementById('incorrect').style.display = 'block';
    document.getElementById('correct').style.display = 'none';
    tryCounter--;
    document.getElementById('try-counter').innerText = tryCounter;
    if (tryCounter == 0) {
      document.getElementById('submit-button').disabled = true;
    }
  }
});