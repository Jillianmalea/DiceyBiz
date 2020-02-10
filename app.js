// all my variables, created buttons, created array
let btnSubmit = $('#btnSubmit');
let btnRoll = $(`#btnRoll`);
let btnSum = $(`#btnSum`);
let diceContainer = document.getElementById('dice-container');
let numOfDice = 0;
diceArray = [];
// adds click functions and adds new functionality
btnSubmit.click(() => {
    new Die();
});
btnRoll.click(() => {
    diceArray.forEach(die => die.roll())
});
btnSum.click(() => {
    let sum = 0;

    diceArray.forEach(die => {
        sum = sum + die.value;
    })
    alert(sum);
});
// this is where the die gets all it's values
class Die {
    constructor(value) {
        this.value = value;
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.id = numOfDice++;
        this.roll();
        this.div.textContent = this.value;
        this.div.addEventListener('dblclick', () => {
            const index = diceArray.indexOf(this);
            if (index > 1) {
                diceArray.splice(index, 1);
                container.removeChild(this.div);
            }
            
        })
        diceContainer.appendChild(this.div);
        diceArray.push(this);
    }
    roll() {
        let randomVal = (Math.floor(Math.random() * 6 + 1))
        this.value = randomVal;
        this.div.innerText = this.value;
    }
}