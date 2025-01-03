// alert("After a humiliating defeat in the West Town tournament at the hands of your rival the Serpent Knight, you train in the Eastwood forest");
// alert("The Eastwood is known for it's monsters and people tend to avoid it");
const battleBtn = document.querySelector("#battle-btn"); 
const attBtn = document.querySelector("#att-btn"); 
const boss = document.getElementById("boss");
const runBtn = document.getElementById("run");
const restBtn = document.getElementById("rest-btn");
let inBattle = false; 

const mainChar = {
    name: "Adam",
    level: 1,
    hp: 10,
    baseHp: 10,
    attack: 1,
};

const monster = {
    name: "Creature",
    level:1,
    hp: 5,
    attack: 1,
}

restBtn.addEventListener("click", () => {
    if(mainChar.hp < mainChar.baseHp){
        alert("Joshua: Looks like you need some rest. Come inside and refresh yourself")
    }else {
        alert("You're feeling fine, no need to rest")
    }
})

battleBtn.addEventListener("click", () => {

    if(inBattle) {
        alert("You're already in a fight");
    }else{
    alert("you encountered a monster"); 
    inBattle = true; 
    console.log(`${mainChar.name} vs ${monster.name}`);
    }
})
let creature = {...monster};
let currentChar = {...mainChar}

attBtn.addEventListener("click", () => {
    if(inBattle){

     

        alert("You attacked");
        console.log(creature.hp)
        creature.hp -= mainChar.attack;
        alert(`${creature.name} attacked back!`);
        mainChar.hp -= creature.attack;
        console.log(`${creature.name} health is at ${creature.hp}`);
        console.log(`your health is at ${mainChar.hp}`);
        
        if(creature.hp <= 0){
            alert("you Won")
            inBattle = false; 
            creature = {...monster};
            mainChar.level ++;
            mainChar.baseHp ++;
            mainChar.attack ++;
            currentChar = {...mainChar}
            console.log(mainChar.level)
        }

    }else {
        alert("There's nothing there silly");
    }
})

runBtn.addEventListener("click", () => {
    if(inBattle){
        inBattle = false;
        alert("You ran away")
    }else{
        alert("What?... Scared of you're own shadow?")
    }
})

boss.addEventListener("click", () => {
    if(mainChar.level < 5){
        alert("You're not strong enough")
    }else{
        alert("After months of training, you return to West Town a defeat the Serpent Knight")
        alert("You are awarded the town's treasure the fabled apple of solid gold with the inscription 'Te Kalliste'")
        alert("Huh.... I wonder what that means?")
    }
    
})