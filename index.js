// alert("After a humiliating defeat in the West Town tournament at the hands of your rival the Serpent Knight, you train in the Eastwood forest");
// alert("The Eastwood is known for it's monsters and people tend to avoid it");
const battleBtn = document.querySelector("#battle-btn"); 
const attBtn = document.querySelector("#att-btn"); 
let inBattle = false; 
const mainChar = {
    name: "Adam",
    level: 1,
    hp: 10,
    attack: 1,
};

const monster = {
    name: "Creature",
    level:1,
    hp: 5,
    attack: 1,
}

battleBtn.addEventListener("click", () => {
    alert("you started a battle");
    inBattle = true; 
    console.log(`${mainChar.name} vs ${monster.name}`);
})

attBtn.addEventListener("click", () => {
    if(inBattle){
    alert("You attacked");
    }else {
        alert("There's nothing there silly");
    }
})