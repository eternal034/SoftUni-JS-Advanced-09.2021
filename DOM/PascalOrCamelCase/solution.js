function solve() {
  const textInput = document.getElementById(`text`).value;
  const caseTypeInput = document.getElementById(`naming-convention`).value;

  const resultEl = document.getElementById(`result`);

  let splittedTextInput = textInput.split(' ');

  if (caseTypeInput == 'Camel Case') {

    for (let i = 1; i < splittedTextInput.length; i++) {
      splittedTextInput[0] = splittedTextInput[0].toLowerCase();
      splittedTextInput[i] = splittedTextInput[i][0].toUpperCase() + splittedTextInput[i].slice(1, splittedTextInput[i].length).toLowerCase();
    };
    return resultEl.textContent = splittedTextInput.join('');

  } else if (caseTypeInput == 'Pascal Case') {

    for (let i = 0; i < splittedTextInput.length; i++) {
      splittedTextInput[i] = splittedTextInput[i][0].toUpperCase() + splittedTextInput[i].slice(1, splittedTextInput[i].length).toLowerCase();
    };
    return resultEl.textContent = splittedTextInput.join('');

  } else {
    return resultEl.textContent = 'Error!';
  }
};