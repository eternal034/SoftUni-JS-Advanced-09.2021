function solve() {
  const text = document.getElementById('input').value;
  const splittedText = text.split('.').filter((el) => el != '');
  const output = document.getElementById('output');
  let finalResult = '';
  let array = []

  if (splittedText.length < 3) {
    finalResult = `<p>${splittedText.join('.')}.</p>`
    return output.innerHTML = finalResult;
  }

  if (splittedText.length % 3 == 0) {
    for (let i = 0; i < splittedText.length; i += 3) {
      array.push(splittedText[i], splittedText[i + 1], splittedText[i + 2]);
      finalResult += `<p>${array.join(`.`)}.</p>`;
      array.length = 0;
    }
  } else {
    for (let i = 0; i < splittedText.length; i += 3) {
      if (splittedText.length - i < 3) {
        array = splittedText.slice(i, splittedText.length);
        finalResult += `<p>${array.join('.')}.</p>`;
      } else {
        array.push(splittedText[i], splittedText[i + 1], splittedText[i + 2]);
        finalResult += `<p>${array.join('.')}.</p>`;
        array.length = 0;
      }
    }
  }
  output.innerHTML = finalResult;
}

