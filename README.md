# 🌌 Three Body Problem Simulation

An interactive, real-time visualization of the famous three-body problem in physics, demonstrating the chaotic and unpredictable nature of gravitational interactions between three celestial bodies.

![Three Body Simulation Demo](3body.gif)

## ✨ Features

- 🎯 **Real-time Physics Simulation** - Watch three bodies interact under realistic gravitational forces
- 🎨 **Visual Trails** - Beautiful motion trails showing the path each body takes through space
- 🖱️ **Interactive Drag Control** - Click and drag any body to change its trajectory
- ⚖️ **Adjustable Mass** - Control the mass of each body (0.1-100 kg) with live updates
- 🎮 **Simulation Controls**:
  - ⏯️ Pause/Resume functionality
  - 🔄 Reset to initial conditions
  - 👁️ Toggle motion trails on/off
  - 🛡️ Toggle elastic boundary collisions
  - ⚡ Adjust simulation speed (0.1x - 3.0x)
- 🌈 **Color-coded Bodies** - Red, Cyan, and Yellow for easy identification
- 🔲 **Elastic Boundaries** - Optional canvas edge collisions to keep objects in view

## 🚀 Getting Started

### 🌐 Try it Online

**Live Demo**: [https://karan-kunwar.github.io/3-Body-Problem/](https://karan-kunwar.github.io/3-Body-Problem/)

No installation needed - just click the link and start experimenting!

### Prerequisites

All you need is a modern web browser! No dependencies or installations required.

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/karan-kunwar/3-Body-Problem.git
   cd 3-Body-Problem
   ```

2. **Open the simulation**
   
   Simply open `index.html` in your web browser:
   
   **Option 1: Double-click**
   - Navigate to the project folder
   - Double-click on `index.html`
   
   **Option 2: Command line**
   ```bash
   # macOS
   open index.html
   
   # Linux
   xdg-open index.html
   
   # Windows
   start index.html
   ```

3. **Start exploring!** 🎉

## 🎮 How to Use

### Basic Controls

- **Reset** - Restart the simulation with current mass settings
- **Pause/Resume** - Freeze or continue the simulation
- **Show Trails** - Toggle the motion trail visibility
- **Enable Boundary** - Keep objects within canvas bounds with elastic collisions
- **Speed Slider** - Adjust simulation speed from 0.1x to 3.0x

### Interactive Features

1. **Drag Objects**: Click and hold any body to drag it around. Release to apply momentum based on your drag motion.

2. **Adjust Mass**: Use the color-coded mass input fields at the bottom:
   - 🔴 **Red Body** - Adjust mass in real-time
   - 🔵 **Cyan Body** - Adjust mass in real-time  
   - 🟡 **Yellow Body** - Adjust mass in real-time

3. **Experiment**: Try different mass combinations and initial conditions to observe various orbital patterns!

## 📁 Project Structure

```
3-Body-Problem/
├── index.html      # Main HTML structure
├── styles.css      # Styling and layout
├── script.js       # Physics simulation and interaction logic
├── README.md       # This file
└── GEMINI.md       # Development log and commit history
```

## 🔬 Physics Behind It

The simulation uses:
- **Newton's Law of Universal Gravitation**: F = G × (m₁ × m₂) / r²
- **Numerical Integration**: Euler method for position updates
- **Elastic Collisions**: Perfect energy conservation at boundaries
- **Real-time Force Calculations**: Gravitational forces between all body pairs

## 🛠️ Technologies Used

- **HTML5 Canvas** - For rendering graphics
- **Vanilla JavaScript** - Physics calculations and interactivity
- **CSS3** - Modern styling with gradients and shadows

## 🌟 Tips for Best Experience

- Try setting one body to a very high mass (like 80-100 kg) and watch the others orbit around it
- Disable boundaries and see objects escape to infinity
- Use slower speeds (0.3x-0.5x) to observe intricate orbital patterns
- Drag objects with the simulation running for chaotic results!

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📧 Contact

Created by [Karan Kunwar](https://github.com/karan-kunwar)

---

⭐ If you found this project interesting, please consider giving it a star!
