function generateReport() {
    const columsTitles = document.querySelector('table thead');
    const checkboxes = Array.from(document.querySelectorAll('tr input[type="checkbox"]'));
    const selectedCells = Array.from(document.querySelectorAll('tr input[type="checkbox"]:checked'));
    const contentRows = Array.from(document.querySelectorAll('tbody tr'));

    let finalResult = [];

    let selectedBoxes = [];
    let selectedNamesAsKeys = [];
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedBoxes.push(i);
            selectedNamesAsKeys.push(checkboxes[i].parentElement.textContent.trim().toLowerCase());
        }
    };

    let object = {};
    let keyValues = [];
    if (selectedBoxes.length > 0) {
        for (let row of contentRows) {
            for (let i = 0; i < row.children.length; i++) {
                if (selectedBoxes.includes(i)) {
                    keyValues.push(row.children[i].textContent);
                }
            }
            selectedNamesAsKeys.forEach((key, i) => object[key] = keyValues[i]);
            finalResult.push(object);
            object = {};
            keyValues = [];
        }
    }
    document.getElementById('output').value = JSON.stringify(finalResult);
}