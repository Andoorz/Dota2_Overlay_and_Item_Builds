# Dota Assistant

A lightweight Dota 2 overlay built with Electron, React and Game State Integration (GSI).

The goal of this project is to provide important objective timers and gameplay information without cluttering the screen.

## Features

### Current Features

✅ Power Rune Timer

✅ Bounty Rune Timer

✅ Wisdom Rune Timer

✅ Tormentor Timer

✅ Automatic match detection

✅ Real-time game clock using Dota 2 GSI

✅ Transparent overlay

✅ Always-on-top window

✅ Click-through overlay

✅ Auto-hide when no match is active

---

## Planned Features

🔲 Hero Detection

🔲 Inventory Tracking

🔲 Hero-specific Item Builds

🔲 Item Recommendations

🔲 Matchup Analysis

🔲 Automatic Overlay Positioning

🔲 Multi-monitor Support

---

## Tech Stack

- React
- TypeScript
- Electron
- Node.js
- Express
- Dota 2 Game State Integration (GSI)

---

## Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/dota-assistant.git
```

```bash
cd dota-assistant
```

### Install dependencies

```bash
npm install
```

### Start development mode

```bash
npm run electron-dev
```

---

## Dota 2 Configuration

Create the following folder:

```text
dota 2 beta/game/dota/cfg/gamestate_integration
```

Create:

```text
gamestate_integration_overlay.cfg
```

Paste:

```cfg
"dota2-gsi"
{
    "uri" "http://127.0.0.1:3000/gsi"

    "timeout" "5.0"
    "buffer" "0.1"
    "throttle" "0.1"

    "heartbeat" "30.0"

    "data"
    {
        "map" "1"
        "hero" "1"
        "player" "1"
        "items" "1"
    }
}
```

Restart Dota 2 after creating the file.

---

## How It Works

Dota 2 sends match data through Game State Integration.

```text
Dota 2
 ↓
Game State Integration
 ↓
Express Server
 ↓
Electron
 ↓
React Overlay
```

The overlay reads:

- Game Time
- Match State
- Hero Information
- Inventory Data

and presents useful information directly on screen.

---

## Disclaimer

This application does not automate gameplay, read hidden information or interact with the game client.

It only uses officially available Game State Integration data provided by Dota 2.

---

## Screenshots

(Add screenshots here)

---

## Contributors

Created by Andoorz.

Contributions, bug reports and feature requests are welcome.