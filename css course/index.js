// SLIDER SCRIPT
const slider = document.querySelector(".time_filters_sliders .slider");
document.querySelectorAll(".time_filters button").forEach((button) => {
  button.addEventListener("click", () => {
    const pos = parseInt(button.dataset.position);
    slider.style.transform = `translateX(calc(${pos} * 50px))`;
  });
});

// CHART SCRIPT
const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

// Set canvas dimensions to match container
canvas.width = canvas.offsetWidth;
canvas.height = 400;

const width = canvas.width;
const height = canvas.height;

// Sample data
const data = [30, 60, 55, 40, 50, 95, 70, 35, 90, 130, 75, 110];

// Normalize data
const max = Math.max(...data);
const padding = 50;

const stepX = (width - padding * 2) / (data.length - 1);

// Convert data to points
const points = data.map((val, i) => ({
  x: padding + i * stepX,
  y: height - padding - (val / max) * (height - padding * 2),
}));

// 🔹 Draw background area (light grey)
ctx.beginPath();
ctx.moveTo(points[0].x, height - padding);

points.forEach((p) => {
  ctx.lineTo(p.x, p.y + 40); // slightly offset for background shape
});

ctx.lineTo(points[points.length - 1].x, height - padding);
ctx.closePath();

ctx.fillStyle = "rgba(100, 100, 150, 0.15)";
ctx.fill();

// 🔹 Smooth line
ctx.beginPath();
ctx.moveTo(points[0].x, points[0].y);

for (let i = 1; i < points.length - 1; i++) {
  const midX = (points[i].x + points[i + 1].x) / 2;
  const midY = (points[i].y + points[i + 1].y) / 2;

  ctx.quadraticCurveTo(points[i].x, points[i].y, midX, midY);
}

// Last segment
ctx.quadraticCurveTo(points[points.length - 1].x, points[points.length - 1].y, points[points.length - 1].x, points[points.length - 1].y);

// 🔹 Gradient fill under line
const gradient = ctx.createLinearGradient(0, 0, 0, height);
gradient.addColorStop(0, "rgba(50, 50, 120, 0.2)");
gradient.addColorStop(1, "rgba(50, 50, 120, 0)");

ctx.lineTo(points[points.length - 1].x, height - padding);
ctx.lineTo(points[0].x, height - padding);
ctx.closePath();

ctx.fillStyle = gradient;
ctx.fill();

// 🔹 Draw line on top
ctx.beginPath();
ctx.moveTo(points[0].x, points[0].y);

for (let i = 1; i < points.length - 1; i++) {
  const midX = (points[i].x + points[i + 1].x) / 2;
  const midY = (points[i].y + points[i + 1].y) / 2;

  ctx.quadraticCurveTo(points[i].x, points[i].y, midX, midY);
}

ctx.quadraticCurveTo(points[points.length - 1].x, points[points.length - 1].y, points[points.length - 1].x, points[points.length - 1].y);

ctx.strokeStyle = "#2c2c54";
ctx.lineWidth = 3;
ctx.stroke();

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

ctx.fillStyle = "#666";
ctx.font = "12px Arial";
ctx.textAlign = "center";

points.forEach((p, i) => {
  ctx.fillText(months[i], p.x, height - 20);
});

ctx.textAlign = "right";

const steps = 3;
for (let i = 0; i <= steps; i++) {
  const value = (max / steps) * i;
  const y = height - padding - (value / max) * (height - padding * 2);

  ctx.fillText(`$${Math.round(value)}k`, padding - 10, y);
}

ctx.strokeStyle = "rgba(0,0,0,0.05)";
ctx.lineWidth = 1;

for (let i = 0; i <= steps; i++) {
  const y = height - padding - (i / steps) * (height - padding * 2);

  ctx.beginPath();
  ctx.moveTo(padding, y);
  ctx.lineTo(width - padding, y);
  ctx.stroke();
}
