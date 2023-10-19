let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value += value;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
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
