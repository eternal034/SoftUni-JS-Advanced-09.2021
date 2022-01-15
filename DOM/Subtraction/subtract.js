function subtract() {
    const first = document.getElementById('firstNumber').value;
    const second = document.getElementById('secondNumber').value;

    const result = document.getElementById(`result`);

    result.textContent = first - second;
}