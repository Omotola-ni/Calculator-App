let currentInput = '0';
document.getElementById('display').value = currentInput;
let operators = ["+", "-", "/", "*", "%"]

function lastCurrentInputSymbol() {
    return currentInput[currentInput.length-1];
}
function containsAnyOperator(string) {
    for (var i = 0; i < operators.length-1; i++) {
      if (string.includes(operators[i])) {
        return true;
      }
    }
    return false;
  }
function appendToDisplay(value) {
    if(currentInput == "0"){
        currentInput = value;
        document.getElementById('display').value = currentInput;
    }else if(operators.includes(lastCurrentInputSymbol()) && operators.includes(value)){
        currentInput = currentInput.substring(0,currentInput.length-1).concat(value);
        document.getElementById('display').value = currentInput;
    }else if(value == "."){
        if(lastCurrentInputSymbol() == "."){

        }else if(currentInput.includes(".")){
            let lastIndex = currentInput.lastIndexOf(".")
            if(containsAnyOperator(currentInput.substring(lastIndex, currentInput.length))){
                currentInput += value;
                document.getElementById('display').value += value;
            }else{

            }
        }else{
            currentInput += value;
            document.getElementById('display').value += value;
        }
    }
    else{
        currentInput += value;
        document.getElementById('display').value += value;
    }
}

function clearDisplay() {
    currentInput = '0';
    document.getElementById('display').value = currentInput;
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}

// Function to calculate square root
function calculateSquareRoot() {
    try {
        const input = currentInput;
        if (input.startsWith('-')) {
            document.getElementById('display').value = 'Error';
            currentInput = '';
            return;
        }
        const result = Math.sqrt(parseFloat(input));
        document.getElementById('display').value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}

// Function to calculate square
function calculateSquare() {
    try {
        const result = eval(`Math.pow(${currentInput}, 2)`);
        document.getElementById('display').value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}
function eraseCurrentInput() {
    if(currentInput == "0"){
      
    }else if(currentInput.length == 1){
        currentInput = "0";
        document.getElementById('display').value = currentInput;
    }else{
        currentInput = currentInput.substring(0,currentInput.length-1);
        document.getElementById('display').value = currentInput;
    }
}