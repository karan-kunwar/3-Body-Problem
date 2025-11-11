# Three Body Problem Simulation

A graphical demonstration of the three-body problem using HTML, JavaScript, and Canvas API.

## Project Overview

This project simulates the gravitational interactions between three celestial bodies, demonstrating the chaotic and unpredictable nature of the three-body problem in physics.

## Features

- **Real-time Simulation**: Watch three bodies interact under gravitational forces
- **Visual Trails**: See the path each body takes through space
- **Interactive Controls**:
  - Reset button to restart the simulation
  - Pause/Resume functionality
  - Toggle trails on/off
  - Adjustable simulation speed (0.1x - 3.0x)
- **Color-coded Bodies**: Each body has a distinct color (red, cyan, yellow)

## Files

- `index.html` - Main HTML structure
- `styles.css` - Styling and layout
- `script.js` - Simulation logic and physics calculations

## How to Run

Simply open `index.html` in a web browser.

## Commit History

### Commit 1: Initial three-body simulation
- Created HTML structure with canvas and controls
- Implemented CSS styling with gradient background
- Developed physics simulation with gravitational calculations
- Added interactive controls (reset, pause, trails, speed)

### Commit 2: Add mouse drag control feature
- Implemented click-and-drag functionality for objects
- Added cursor feedback (grab/grabbing)
- Objects retain velocity based on drag motion when released
- Physics continues normally after releasing dragged object
