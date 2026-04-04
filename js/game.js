
const game = {
    currentScenario: null,
    currentRoom: null,
    flags: {}
}

function initNewScenario() {
    const scenario = scenarios[[currentScenarioIndex]]

    game.currentScenario = scenario;
    game.currentRoom = scenario.startRoom;

    game.flags = { ...scenario.flags };

}


function startIntro() {
    hideInput();

    const introText = game.currentScenario.introText;
    let gameplayText = document.getElementById("gameplay-text");
    typeWriter(introText, gameplayText, showInput);
}