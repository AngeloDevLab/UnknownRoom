// ============================
// DOM ELEMENTS
// ============================

// SECTIONS
const mainSection = document.getElementById("main-section");

// BUTTONS
const startGamebtn = document.getElementById("start-game-button");
const backToMainMenuBtn = document.getElementById("back-to-main-menu-button");
const sendCommandButton = document.getElementById("send-command-button");

const userInput = document.getElementById("user-input");

// ============================
// STATE
// ============================

let typeWriterActive = false;
let cancelTyping = false;

// ============================
// UI ACTIONS
// ============================

function onStartGamePressed() {
    setAppState(appState.Loading);
}

function onBackToMainMenuPressed() {
    if (typeWriterActive) {
        cancelTyping = true;
    }

    hideGameplay();
    setAppState(appState.MainMenu);
}

function onSendCommandPressed() {

    processInput();
    hideInput();
}

// TYPEWRITER
function typeWriter(txt, target, callback) {
    typeWriterActive = true;

    if (cancelTyping) {
        cancelTyping = false;
        typeWriterActive = false;
        return;
    }

    write(txt, target, 0, callback);

}

function write(txt, target, i, callback) {
    let speed = 50;

    if (i < txt.length) {
        const char = txt.charAt(i);

        if (char === "\n") {
            target.innerHTML += "<br>";
        }
        else {
            target.innerHTML += char;
        }

        i++;
        setTimeout(write, speed, txt, target, i, callback);
    }
    else {
        typeWriterActive = false;
        if (callback) callback();
    }
}




function handleKeyDown(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        processInput();
    }
}

function processInput() {
    const cmd = userInput.value;

    if (cmd === "read note") {
        typeWriter(readNoteText, gameplayText, showInput);
    }
    else if (cmd === "open drawer 1") {
        resetDisplay();
        typeWriter(drawer1Text, showInput);
    }
    else if (cmd === "open drawer 2") {
        resetDisplay();
        typeWriter(drawer2Text, showInput);
    }
    else if (cmd === "open drawer 3") {
        if (!haveDrawerKey) {
            resetDisplay();
            typeWriter(drawer3Text, showInput);
        }
        else {
            resetDisplay();
            typeWriter(drawer3openText, showInput);
            haveDoorKey = true;
        }
    }
    else if (cmd === "look at picture") {
        resetDisplay();
        typeWriter(pictureText, showInput);
    }
    else if (cmd === "move picture") {
        resetDisplay();
        typeWriter(movePictureText, showInput);
    }
    else if (cmd.startsWith("enter code")) {
        tryOpenSafe(cmd);
    }
    else if (cmd === "open door") {
        if (!haveDoorKey) {
            resetDisplay();
            typeWriter("The door is locked", showInput);
        }
        else {
            resetDisplay();
            typeWriter(uWonText);
        }
    }
    else {
        resetDisplay();
        typeWriter("Command not recognized. Try another command.", showInput);
    }
}

function tryOpenSafe(cmd) {
    let parts = cmd.split(":");
    let enteredCode = parts[1].trim();

    if (!enteredCode) {
        resetDisplay();
        typeWriter("Enter which code?", showInput);
        return;
    }

    resetDisplay();

    if (enteredCode === "3144") {
        typeWriter(openSafeText, showInput);
        haveDrawerKey = true;
    }
    else {
        typeWriter("Nothing happens", showInput);
    }

}




// ============================
// UI HELPERS
// ============================

// main menu
function showMainMenu() {
    mainSection.innerHTML = getMainMenuTemplate(currentScenarioIndex);
}

function hideMainMenu() {
    mainSection.innerHTML = "";
}

function previousScenario() {
    currentScenarioIndex--;
    checkScenarioIndex();
    showMainMenu();
}

function nextScenario() {
    currentScenarioIndex++;
    checkScenarioIndex();
    showMainMenu();
}

function checkScenarioIndex() {
    if (currentScenarioIndex <= 0) {
        currentScenarioIndex = scenarios.length - 1;
    }
    else if (currentScenarioIndex >= scenarios.length) {
        currentScenarioIndex = 0;
    }
}

// loading screen
function showLoadingScreen() {
    mainSection.innerHTML = getLoadingScreenTemplate();
}

function hideLoadingScreen() {
    mainSection.innerHTML = "";
}

// Gameplay
function showGameplay() {
    mainSection.innerHTML = getGameplayTemplate(currentScenarioIndex);
}

function hideGameplay() {
    mainSection.innerHTML = "";
}

function showInput() {
    let inputSectionRef = document.getElementById("input-section");
    inputSectionRef.classList.remove("hidden");
}

function hideInput() {
    let inputSectionRef = document.getElementById("input-section");
    inputSectionRef.classList.add("hidden");
}
