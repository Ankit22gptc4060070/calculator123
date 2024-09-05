function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    let display = document.getElementById('display').value;
    if (display === '' && operator !== '-') return;
    document.getElementById('display').value += operator;
}

function calculate() {
    let display = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(display);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}