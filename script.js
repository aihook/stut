function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendCharacter(char) {
    document.getElementById("display").value += char;
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "错误";
    }
}
