alert("The Draco Knight and his goons invaded the town of Edenton, an idyllic town known for its apple orchards.");
alert("They have taken the love of your life and mayor Peleus’ daughter, Eva, hostage.");
alert("You couldn’t hold them back and was unfortunately driven out of town. Fleeing to the nearby forest you meet Joshua the hermit.");
alert("He takes you in, and after hearing of your plight he offers his help to train your skills")

const battleBtn = document.querySelector("#battle-btn"); 
const attBtn = document.querySelector("#att-btn"); 
const boss = document.getElementById("boss");
const runBtn = document.getElementById("run");
const restBtn = document.getElementById("rest-btn");
let inBattle = false; 
const heroHp = document.getElementById("hero-hp");
const enemyHp = document.getElementById("enemy-hp");
const heroLvl = document.getElementById("hero-lvl");
const enemyLvl = document.getElementById("enemy-lvl");
let img = document.createElement("img");
const enemeyStats = document.getElementById("creature-stats");
let alive = true; 

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

let creature = {...monster};

//Rest feature: Allows Player to restore health
restBtn.addEventListener("click", () => {
    if(alive){
    if(mainChar.hp < mainChar.baseHp){
        alert("Joshua: Looks like you need some rest. Come inside and refresh yourself");
        mainChar.hp = mainChar.baseHp;
        heroHp.textContent = "HP: " + mainChar.hp
    }else {
        alert("You're feeling fine, no need to rest");
    }
    }
})

//Initiates a battle
battleBtn.addEventListener("click", () => {
    if(alive){
    if(inBattle) {
        alert("You're already in a fight");
    }else{
    alert("you encountered a monster"); 
    inBattle = true; 
    img.src = "snake.jpg";
    img.id = "snake";
    //will eventually like to add an array of monsters to make encounters more interesting, maybe have level scaling
    enemeyStats.appendChild(img);    
    enemyLvl.textContent += creature.level; 
    enemyHp.textContent = "HP: " + creature.hp;
    console.log(`${mainChar.name} vs ${monster.name}`);
    }
    }
})

//let currentChar = {...mainChar}

heroHp.textContent = "HP: " + mainChar.hp;
heroLvl.textContent = "Lvl: " + mainChar.level;


attBtn.addEventListener("click", () => {

    if(inBattle){
        
        alert("You attacked");
        //console.log(creature.hp);
        creature.hp -= mainChar.attack;
        alert(`${creature.name} attacked back!`);
        mainChar.hp -= creature.attack;
        //console.log(`${creature.name} health is at ${creature.hp}`);
        //console.log(`your health is at ${mainChar.hp}`);
        heroHp.textContent = "HP: " + mainChar.hp;
        enemyHp.textContent = "HP: " + creature.hp;

        if(mainChar.hp <= 0){
            alert("You overexert yourself and suffer a fatal wound, Joshua finds you but it's too late")
            inBattle =false;
            alive = false;
        }
        
        if(creature.hp <= 0){
            alert("you Won");
            img.src="";
            inBattle = false; 
            creature = {...monster};
            mainChar.level ++;
            mainChar.baseHp ++;
            mainChar.attack ++;
            heroLvl.textContent = "Level: " + mainChar.level;
            //currentChar = {...mainChar}
            console.log(mainChar.level)
            //need to clear creature stats
        }

    }else {
        alert("There's nothing there silly");
    }
})

runBtn.addEventListener("click", () => {
    if(inBattle){
        
        alert("You ran away");
        img.src="0";
        enemyHp.textContent = "HP: ";
        enemyLvl.textContent = "Level: ";//not working for some reason
        inBattle = false;
    }else{
        alert("What?... Scared of you're own shadow?")
    }
})

boss.addEventListener("click", () => {
    if(alive){
    if(mainChar.level < 5){
        alert("Joshua: You're not strong enough, you shouldn't fight him yet")
        let proceed = confirm("Do you wish to continue?")
        if(proceed) alert("Bad Ending: Sadly, you were not strong enough to defeat the Draco knight. As a result, you were taken into captivity and, along with Eva, the mayor, and the citizens of the town, were taken to the Draco Knight’s kingdom in the far east. ")
    }else{
        alert("The months of training in the woods finally paid off! You beat back the Draco Knight and rescued Eva.")
        alert("Mayor Peleus in gratitude gives you a valuable treasure that he had received as a wedding gift. A golden apple with the inscription 'Ti Kallisti'.")
        alert("Huh.... I wonder what that means?")
    }
    }
})