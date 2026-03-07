# UnknownRoom

A browser-based text adventure built with vanilla HTML, CSS and JavaScript.

## Vision

UnknownRoom is a long-term learning project focused on building a clean, modular and scalable text adventure architecture.

The goal is not just to create a small game, but to explore:

- clean code principles  
- separation of concerns  
- modular system design  
- scalable parser logic  
- structured Git workflows  

This project evolves step by step alongside my growing development skills.

---

## Current Version

**v0.0.2 – Minimal Room Escape Prototype**

Features:
- Basic command parser
- Single room
- Interactive objects (desk, drawers, picture, safe)
- Code-based puzzle
- Win condition (escape)

Recent changes (in progress):
- Refactored UI structure
- Basic app state system (MainMenu → Loading → Gameplay)
- Loading screen with sequential typewriter messages
- type writer game logic currently dosnt work

---

## UI Flow

The application follows a simple state-driven UI flow:

MainMenu → LoadingScreen → Gameplay → MainMenu

The loading screen acts as a transition layer where game initialization
and scenario preparation occur while displaying system-style messages.

---

## Architecture Goals

The project is structured into logical modules:

- `parser` – handles command interpretation  
- `state` – manages game state and flags  
- `world` – defines rooms and objects  
- `inventory` – manages player items  
- `ui` – handles DOM rendering  

The focus is on keeping logic and presentation separated.

---

## Roadmap

Planned incremental expansions:

- Improved parser (synonyms, normalization)
- Multi-room system
- Inventory system
- Event/condition system
- Data-driven content structure
- Refactoring for scalability

---

## Tech Stack

- HTML  
- CSS  
- Vanilla JavaScript  

No frameworks. No backend. No external libraries.

---

## License

MIT License