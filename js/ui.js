
const introText =       `You wake up in a dark room. You can't remember how you got here.
                        In front of you is a door. Beside you stands a desk with a note on it and three drawers.
                        A picture hangs on the wall.
                        What do you do?`;

const readNoteText =    `The note reads: "Welcome to the game! Your objective is to find a way out of this room.
                        Explore your surroundings, interact with objects, and solve puzzles to escape.
                        Good luck!"`;

const drawer1Text =     `You open the first drawer. It's empty.`;

const drawer2Text =     `You open the second drawer. Inside, you find another note.
                        The note reads: "Inside this room is a hidden safe. The code to open it is:
                        3-1-4-?
                        Find the safe and the missing number to escape!"`;

const drawer3Text =     `You cant open the third drawer. It's locked.`;

const drawer3openText = `You unlock the drawer. Inside you find a Key. 
                        Look's like the key to open the door.
                        New command: open door`

const pictureText =     `You look at the picture. It's a painting of a landscape with a river and mountains.
                        There are four birds flying in the sky. The painting looks slightly crooked.
                        You notice scratch marks behind the frame.
                        New command: move picture`;

const movePictureText = `You move the picture aside.
                        Behind it, hidden in the wall, is a small safe.
                        A numeric keypad blinks faintly.
                        New command: enter code: _ _ _ _`

const openSafeText =    `The safe clicks open. Inside u find a key.
                        It looks like a key for the locked drawer`

const uWonText =        `You escaped the room.
                        You won.
                        Congratulations!`









// function showInput() 
// {
//     userInput.classList.remove("dNone");
//     sendCommandButton.classList.remove("dNone");
// }

// function hideInput() 
// {
//     userInput.classList.add("dNone");
//     sendCommandButton.classList.add("dNone");
// }

function handleKeyDown(event) 
{
    if (event.key === "Enter") 
    {
        event.preventDefault();
        processInput();
    }
}

function processInput() 
{
    const cmd = userInput.value;

    if (cmd === "read note") 
    {
        resetDisplay();
        typeWriter(readNoteText, showInput);
    }
    else if (cmd === "open drawer 1") 
    {
        resetDisplay();
        typeWriter(drawer1Text, showInput);
    }
    else if (cmd === "open drawer 2") 
    {
        resetDisplay();
        typeWriter(drawer2Text, showInput);
    }
    else if (cmd === "open drawer 3") 
    {
        if (!haveDrawerKey)
        {
            resetDisplay();
            typeWriter(drawer3Text, showInput);
        }
        else 
        {
            resetDisplay();
            typeWriter(drawer3openText, showInput);
            haveDoorKey = true;
        }
    }
    else if (cmd === "look at picture") 
    {
        resetDisplay();
        typeWriter(pictureText, showInput);
    }
    else if (cmd === "move picture") 
    {
        resetDisplay();
        typeWriter(movePictureText, showInput);
    }
    else if (cmd.startsWith("enter code"))
    {
        tryOpenSafe(cmd);
    }
    else if (cmd === "open door")
    {
        if (!haveDoorKey)
        {
            resetDisplay();
            typeWriter("The door is locked", showInput);
        }
        else
        {
            resetDisplay();
            typeWriter(uWonText);
        }
    }
    else 
    {
        resetDisplay();
        typeWriter("Command not recognized. Try another command.", showInput);
    }
}

function tryOpenSafe(cmd)
{
    let parts = cmd.split(":");
    let enteredCode = parts[1].trim();

    if (!enteredCode)
    {
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









let haveDrawerKey = false;
let haveDoorKey = false;



// ============================
// DOM ELEMENTS
// ============================

const userInput = document.getElementById("userInput");

// SECTIONS
const mainMenuSection = document.getElementById("main-menu-section");
const loadingScreenSection = document.getElementById("loading-screen-section");
const gameplaySection = document.getElementById("gameplay-section");
const inputSection = document.getElementById("input-section");

// SCREEN TEXT
const loadingScreenText = document.getElementById("loading-screen-text");
const gameplayText = document.getElementById("gameplay-text");

// BUTTONS
const startGamebtn = document.getElementById("start-game-button");
const backToMainMenuBtn = document.getElementById("back-to-main-menu-button");
const sendCommandButton = document.getElementById("send-command-button");

// ============================
// STATE
// ============================

let typeWriterActive = false;
let cancelTyping = false;

// ============================
// EVENTS
// ============================



startGamebtn.addEventListener("click", onStartGamePressed);
backToMainMenuBtn.addEventListener("click", onBackToMainMenuPressed);

// ============================
// UI ACTIONS
// ============================

function onStartGamePressed()
{
    setAppState(appState.Loading);
}

function onBackToMainMenuPressed() 
{
    if (typeWriterActive) 
    {
        cancelTyping = true;
    }

    hideGameplay();
    showMainMenu();
    setAppState(appState.MainMenu);
}



// TYPEWRITER
function typeWriter(txt, target, callback) 
{
    typeWriterActive = true;

    if (cancelTyping) 
    {
        cancelTyping = false;
        typeWriterActive = false;
        return;
    }

    write(txt, target, 0, callback);

}

function write(txt, target, i, callback)
{
    let speed = 50;

    if (i < txt.length) 
    {
        const char = txt.charAt(i);

        if (char === "\n") 
        {
            target.innerHTML += "<br>";
        }
        else 
        {
            target.innerHTML += char;
        }

        i++;
        setTimeout(write, speed, txt, target, i, callback);
    }
    else 
    {
        typeWriterActive = false;
        if (callback) callback();
    }
}




function resetUI() 
{
    loadingScreenText.innerHTML = "";
    gameplayText.innerHTML = "";
    typeWriterActive = false;
}



// ============================
// UI HELPERS
// ============================

// Main Menu
function showMainMenu()
{
    mainMenuSection.classList.remove("hide");
}

function hideMainMenu()
{
    mainMenuSection.classList.add("hide");
}

// Loading
function showLoadingScreen()
{
    loadingScreenSection.classList.remove("hide")
}

function hideLoadingScreen()
{
    loadingScreenSection.classList.add("hide")
}

// Gameplay
function showGameplay()
{
    gameplaySection.classList.remove("hide")
}

function hideGameplay()
{
    gameplaySection.classList.add("hide")
}

function showInput() 
{
    userInput.classList.remove("hide");
    sendCommandButton.classList.remove("hide");
}

function hideInput() 
{
    userInput.classList.add("hide");
    sendCommandButton.classList.add("hide");
}