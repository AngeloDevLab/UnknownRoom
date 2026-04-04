function getMainMenuTemplate(i) {
    return `<section class="main-menu-section">
    
                <h1>Welcome to Unknown Room</h1>

                <h2>Choose your Scenario</h2>

                <section id="your-scenario-section" class="your-scenario-section">

                    <button id="previous-scenario-button" class="button svg-button" onclick="previousScenario()">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-chevron-left-icon lucide-chevron-left">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>


                    <div id="your-scenario" class="your-scenario">
                        ${getCurrentScenarioTemplate(i)}
                    </div>

                    <button id="next-scenario-button" class="button svg-button" onclick="nextScenario()">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-chevron-right-icon lucide-chevron-right">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>


                </section>

                <button id="start-game-button" class="button standard-button" onclick="onStartGamePressed()">Start Game</button>
            
            </section>`;
}

function getCurrentScenarioTemplate(i) {
    return `<h3>${scenarios[i].scenarioName}</h3>

            <img src="./assets/icons/file-question-mark.svg" alt="simple picture that descripe the scene">

            <p>${scenarios[i].scenarioDescription}</p>`;
}

function getLoadingScreenTemplate() {
    return `<section class="loading-screen-section">
                <p id="loading-screen-text"></p>
            </section>`;
}

function getGameplayTemplate(i) {
    return `<section class="gameplay-section">

                <h2>${scenarios[i].scenarioName}</h2>

                <div class="gameplay-text-container">
                    <h3>Previously...</h3>
                    <p id="gameplay-text"></p>
                </div>

                <button id="back-to-main-menu-button" class="button standard-button" onclick="onBackToMainMenuPressed()">Back to Main</button>

                <div id="input-section" class="input-section">
                    <input type="text" id="user-input" placeholder="Enter your command..." value="">
                    <button id="send-command-button" class="button standard-button">Send</button>
                </div>

            </section>`;
}