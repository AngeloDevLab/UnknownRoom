# UnknownRoom – Game Design Document

---

## 1. Project Overview

**Genre:** Browser-based Text Adventure  
**Platform:** Web (HTML, CSS, Vanilla JavaScript)  
**Scope:** Long-term scalable learning project  

UnknownRoom is a modular text adventure designed to evolve over time.  
The focus lies on clean architecture, modular systems, and scalable design.

This project serves both as a playable game and as a structured development training ground.

---

## 2. Core Concept

The player wakes up in an unknown room.

Through text-based commands, the player interacts with the environment, discovers clues, solves puzzles, and ultimately escapes.

The initial scenario functions as a minimal prototype and architectural testbed.

---

## 3. Design Philosophy

- Text-first experience  
- Minimal UI  
- Clean separation of logic and presentation  
- Modular system structure  
- Incremental feature growth  
- Architecture over feature overload  

The project prioritizes structure and clarity over rapid complexity.

---

## 4. System Architecture (Layered Design)

### Layer 1 – Input & Parser
Responsible for:
- Reading player input
- Normalizing commands (case, trimming)
- Identifying verbs and targets
- Routing actions to game logic

Future expansion:
- Synonym handling
- Filler word filtering
- Intent-based parsing

---

### Layer 2 – Application State
Responsible for:
- UI flow control
- MainMenu
- Loading
- PressToStart
- Gameplay

Manages transitions between application screens.

---

### Layer 3 – Game State
Responsible for:
- current room
- player status
- inventory
- puzzle progress

Independent from UI and input handling.

---

### Layer 4 – Inventory System (Planned)
Responsible for:
- Item collection
- Item usage
- Item-based interactions

---

### Layer 5 – Event System (Planned)
Responsible for:
- Conditional triggers
- Environment changes
- Dynamic responses based on state

---

### Layer 6 – UI Layer
Responsible for:
- Text rendering
- Typewriter effect
- Minimal interface feedback
- Screen state transitions (menu, loading, gameplay)

UI must not contain core game logic.

---

## 5. Current Gameplay Loop (v0.0.1)

1. Environment description is displayed  
2. Player enters a text command  
3. Parser interprets the command  
4. Game state updates  
5. World reacts with new output  
6. Repeat until win condition  

---

## 6. Initial Scenario (v0.0.1)

### Room Elements

- Door (locked)
- Desk with three drawers
- Picture on the wall
- Hidden safe

---

### Puzzle Flow

- Drawer 2 reveals partial safe code: `314?`
- The picture description mentions four birds
- Player deduces the full code: `3144`
- Safe unlocks drawer key
- Drawer unlocks door key
- Player escapes

---

## 7. Scalability Plan

### Short-Term Goals
- Refactor command handling
- Centralize game state
- Remove excessive hard-coded logic

---

### Mid-Term Goals
- Multi-room system
- Navigation commands
- Abstract object interaction
- Structured inventory

---

### Long-Term Goals
- Data-driven room definitions (JSON)
- Advanced parser system
- Conditional event framework
- Expandable world architecture
- Optional AI-assisted content generation

---

## 8. Versioning Strategy

- `v0.x.x` → Experimental development phase  
- `v1.0.0` → Stable core engine  
- Post 1.0 → Feature expansion  

---

## 9. Constraints

- Vanilla JavaScript only  
- No frameworks  
- No backend  
- No external dependencies  
- Clean and readable codebase  

---

## 10. Guiding Principle

UnknownRoom is not just a game.

It is a long-term structured development project built to grow alongside the developer’s skills.

Architecture comes first.  
Features follow.