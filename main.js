const timer = document.getElementById("timer");
const hint = document.getElementById("hint");
let running = false;
let interval;
const initial = 25 * 60 * 1000;
let ms = initial;

function showTime() {
  const seconds = (Math.floor(ms / 1000) % 60).toString();
  const minutes = Math.floor((ms / (1000 * 60)) % 60).toString();

  return `${minutes.padStart(2, "0")} : ${seconds.padStart(2, "0")}`;
}

function tick() {
  ms -= 1000;
  timer.innerHTML = showTime();

  if (ms <= 0) {
    running = false;
    if (interval) clearInterval(interval);
    ms = initial;
    hint.style.display = "block";
  }
}

timer.onclick = function() {
  if (running) {
    running = false;
    if (interval) clearInterval(interval);
    hint.style.display = "block";
  } else {
    running = true;
    hint.style.display = "none";
    // Tick once immediately to show immediate feedback
    // to the user's click, otherwise it may appear as if
    // the click didn't register at first glance.
    if (ms === initial) tick();
    interval = setInterval(tick, 1000);
  }
};
