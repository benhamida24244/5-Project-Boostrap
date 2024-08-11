// Add custom JavaScript here
const lbName = document.getElementById('lbName');
const MyName = "I am Benhamida Mohammed";

function EffectName() {
    const Mynamearr = MyName.split("");
    console.log(Mynamearr);
    
    Mynamearr.map((char , index) => {
        setTimeout(() => {
        lbName.innerHTML += char;
        } , index * 100);
    })    
}
window.addEventListener('load', () => {
  EffectName();
});