const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

const G = 0.5;
let isPaused = false;
let showTrails = true;
let speedMultiplier = 1.0;

let draggedBody = null;
let lastMouseX = 0;
let lastMouseY = 0;

class Body {
    constructor(x, y, vx, vy, mass, color) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.mass = mass;
        this.color = color;
        this.trail = [];
        this.maxTrailLength = 150;
    }

    updatePosition(dt) {
        this.x += this.vx * dt;
        this.y += this.vy * dt;
        
        if (showTrails) {
            this.trail.push({ x: this.x, y: this.y });
            if (this.trail.length > this.maxTrailLength) {
                this.trail.shift();
            }
        }
    }

    applyForce(fx, fy) {
        this.vx += fx / this.mass;
        this.vy += fy / this.mass;
    }

    containsPoint(x, y) {
        const radius = 15;
        const dx = x - this.x;
        const dy = y - this.y;
        return dx * dx + dy * dy <= radius * radius;
    }

    draw() {
        if (showTrails && this.trail.length > 1) {
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1;
            ctx.globalAlpha = 0.3;
            ctx.beginPath();
            ctx.moveTo(this.trail[0].x, this.trail[0].y);
            for (let i = 1; i < this.trail.length; i++) {
                ctx.lineTo(this.trail[i].x, this.trail[i].y);
            }
            ctx.stroke();
            ctx.globalAlpha = 1;
        }

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 15, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}

let bodies = [];

function initBodies() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    const mass1 = parseFloat(document.getElementById('mass1').value);
    const mass2 = parseFloat(document.getElementById('mass2').value);
    const mass3 = parseFloat(document.getElementById('mass3').value);
    
    bodies = [
        new Body(centerX - 100, centerY, 0, -1.5, mass1, '#ff6b6b'),
        new Body(centerX + 100, centerY, 0, 1.5, mass2, '#4ecdc4'),
        new Body(centerX, centerY - 100, 1.5, 0, mass3, '#ffe66d')
    ];
}

function calculateForces() {
    for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
            const dx = bodies[j].x - bodies[i].x;
            const dy = bodies[j].y - bodies[i].y;
            const distSq = dx * dx + dy * dy;
            const dist = Math.sqrt(distSq);
            
            if (dist > 1) {
                const force = G * bodies[i].mass * bodies[j].mass / distSq;
                const fx = force * dx / dist;
                const fy = force * dy / dist;
                
                bodies[i].applyForce(fx, fy);
                bodies[j].applyForce(-fx, -fy);
            }
        }
    }
}

function update() {
    if (!isPaused && !draggedBody) {
        const dt = 0.1 * speedMultiplier;
        calculateForces();
        
        bodies.forEach(body => {
            body.updatePosition(dt);
        });
    }
}

function draw() {
    if (!showTrails || !isPaused) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    bodies.forEach(body => body.draw());
}

function animate() {
    update();
    draw();
    requestAnimationFrame(animate);
}

document.getElementById('resetBtn').addEventListener('click', () => {
    initBodies();
});

document.getElementById('pauseBtn').addEventListener('click', (e) => {
    isPaused = !isPaused;
    e.target.textContent = isPaused ? 'Resume' : 'Pause';
});

document.getElementById('trailsCheckbox').addEventListener('change', (e) => {
    showTrails = e.target.checked;
    if (!showTrails) {
        bodies.forEach(body => body.trail = []);
    }
});

document.getElementById('speedSlider').addEventListener('input', (e) => {
    speedMultiplier = parseFloat(e.target.value);
    document.getElementById('speedValue').textContent = speedMultiplier.toFixed(1) + 'x';
});

canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    for (let body of bodies) {
        if (body.containsPoint(mouseX, mouseY)) {
            draggedBody = body;
            lastMouseX = mouseX;
            lastMouseY = mouseY;
            canvas.style.cursor = 'grabbing';
            break;
        }
    }
});

canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    if (draggedBody) {
        const dx = mouseX - lastMouseX;
        const dy = mouseY - lastMouseY;
        
        draggedBody.x = mouseX;
        draggedBody.y = mouseY;
        draggedBody.vx = dx * 2;
        draggedBody.vy = dy * 2;
        
        lastMouseX = mouseX;
        lastMouseY = mouseY;
    } else {
        let hovering = false;
        for (let body of bodies) {
            if (body.containsPoint(mouseX, mouseY)) {
                hovering = true;
                break;
            }
        }
        canvas.style.cursor = hovering ? 'grab' : 'default';
    }
});

canvas.addEventListener('mouseup', () => {
    draggedBody = null;
    canvas.style.cursor = 'default';
});

canvas.addEventListener('mouseleave', () => {
    draggedBody = null;
    canvas.style.cursor = 'default';
});

document.getElementById('mass1').addEventListener('change', () => {
    if (bodies[0]) bodies[0].mass = parseFloat(document.getElementById('mass1').value);
});

document.getElementById('mass2').addEventListener('change', () => {
    if (bodies[1]) bodies[1].mass = parseFloat(document.getElementById('mass2').value);
});

document.getElementById('mass3').addEventListener('change', () => {
    if (bodies[2]) bodies[2].mass = parseFloat(document.getElementById('mass3').value);
});

initBodies();
animate();
