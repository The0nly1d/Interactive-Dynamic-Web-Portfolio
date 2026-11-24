// Event 1: Click Event to toggle Dark Mode
const modeBtn = document.getElementById('modeBtn');
modeBtn.onclick = function() {
    document.body.classList.toggle('dark-mode');
};

// Event 2: Mouse Over Event to scale the image
const img = document.getElementById('mainImg');
img.onmouseover = function() {
    this.style.transform = "rotate(10deg) scale(1.1)";
};
img.onmouseout = function() {
    this.style.transform = "rotate(0deg) scale(1)";
};

// Event 3: Click Event to display a personalized greeting
document.getElementById('greetBtn').onclick = function() {
    const name = document.getElementById('userName').value;
    const title = document.getElementById('title');
    
    if(name.trim() !== "") {
        title.innerText = "Hello, " + name + "!";
        alert("Welcome to my website, " + name + "!");
    } else {
        alert("Please enter your name first.");
    }
};