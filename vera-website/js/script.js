const updateWordElement = document.querySelector('.Updateword');
const words = ["Small Business", "Startups" , "Enterprise"];
let wordIndex = 0;

function updateWords() {
    setInterval(() => {
        updateWordElement.textContent = words[wordIndex];
        wordIndex = (wordIndex + 1) % words.length; // Loop back to the first word
    }, 1000);
}

window.addEventListener('load', updateWords);
