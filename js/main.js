// ============================
// APPSTATE
// ============================

window.addEventListener("load", initApp)

const appState =
{
    PressToStart: "PressToStart",
    MainMenu: "MainMenu",
    Loading: "Loading",
    Playing: "Playing"
};

const loadingSteps =
    [
        "Reset Game...\n",
        "Clean Textarea...\n",
        "Write new Story...\n",
        "Loading Scenario...\n\n",
        "Press Any Key To Start"
    ]

let currentAppState;
let currentScenarioIndex = 0;

function initApp() {
    setAppState(appState.MainMenu);
}

function setAppState(newAppState) {
    currentAppState = newAppState;

    if (currentAppState === appState.PressToStart) {
        handlePressToStart();
    }

    if (currentAppState === appState.MainMenu) {
        showMainMenu();
    }

    if (currentAppState === appState.Loading) {
        loadGame();
    }

    if (currentAppState === appState.Playing) {
        startIntro();
    }
}

function loadGame() {
    hideMainMenu();
    showLoadingScreen();

    initGame()
}

function initGame() {
    
    initNewScenario()
    runLoadingSteps(0);
}

function runLoadingSteps(step) {
    const loadingScreenText = document.getElementById("loading-screen-text");

    if (step >= loadingSteps.length) {
        setAppState(appState.PressToStart);
        return;
    }

    typeWriter(loadingSteps[step], loadingScreenText, function () { runLoadingSteps(step + 1) });

}

function handlePressToStart() {
    document.addEventListener("keydown", continueGame);
    document.addEventListener("click", continueGame);
}

function continueGame() {
    document.removeEventListener("keydown", continueGame);
    document.removeEventListener("click", continueGame);

    hideLoadingScreen();
    showGameplay();
    setAppState(appState.Playing)
}