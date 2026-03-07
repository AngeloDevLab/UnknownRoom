
// ============================
// STATE
// ============================

const loadingSteps = 
[
    "Reset Game...\n",
    "Clean Inventory...\n",
    "Draw New Map...\n",
    "Loading Scenario...\n\n",
    "Press Any Key To Start"
]

const appState = 
{
    PressToStart: "PressToStart",
    MainMenu: "MainMenu",
    Loading: "Loading",
    Playing: "Playing"
};

let currentAppState = appState.MainMenu;


function setAppState(newAppState)
{
    currentAppState = newAppState;

    if (currentAppState === appState.PressToStart)
    {
        handlePressToStart();
    }

    if (currentAppState === appState.MainMenu)
    {
        showMainMenu();
    }

    if (currentAppState === appState.Loading)
    {
        loadGame();
    }

    if (currentAppState === appState.Playing)
    {
        startIntro();
    }
}

function loadGame()
{
    resetGame();

    hideMainMenu();
    showLoadingScreen();

    initGame()
}

function handlePressToStart()
{
    document.addEventListener("keydown", continueGame);
    document.addEventListener("click", continueGame);
}

function continueGame()
{
    document.removeEventListener("keydown", continueGame);
    document.removeEventListener("click", continueGame);

    hideLoadingScreen();
    showGameplay();
    setAppState(appState.Playing)
}

function initGame()
{
    runLoadingSteps(0);
}

function resetGame()
{
    resetUI();
    // more resets
}

function runLoadingSteps(step)
{
    if (step >= loadingSteps.length)
    {
        setAppState(appState.PressToStart);
        return;
    }

    typeWriter(loadingSteps[step], loadingScreenText, function(){runLoadingSteps(step + 1)});

}

function startIntro() 
{
    typeWriter(introText, gameplayText);
}