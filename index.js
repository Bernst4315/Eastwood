// alert("The Draco Knight and his goons invaded the town of Edenton, an idyllic town known for its apple orchards.");
// alert("They have taken the love of your life and mayor Peleus’ daughter, Eva, hostage.");
// alert("You couldn’t hold them back and was unfortunately driven out of town. Fleeing to the nearby forest you meet Joshua the hermit.");
// alert("He takes you in, and after hearing of your plight he offers his help to train your skills")

const battleBtn = document.querySelector("#battle-btn"); 
const attBtn = document.querySelector("#att-btn"); 
const boss = document.getElementById("boss");
const runBtn = document.getElementById("run");
const restBtn = document.getElementById("rest-btn");
const heroHp = document.getElementById("hero-hp");

const heroLvl = document.getElementById("hero-lvl");
let img = document.createElement("img");

const enemeyStats = document.getElementById("enemy-stats");
const enemyName = document.getElementById("enemy-name");
const enemyLvl = document.getElementById("enemy-lvl");
const enemyHp = document.getElementById("enemy-hp");

let alive = true; 
let inBattle = false; 

class GameCharacter{
    constructor(name, level, hp, attack){
           this.name = name;
           this.level = level;
           this.hp = hp;
           this.attack = attack;
    }
}

class Person extends GameCharacter {
    constructor(name, baseHp){
        super(name, 1, 10, 1);
        this.baseHp = baseHp;
    }
} 

class Monster extends GameCharacter{
    constructor(name){
        super(name, 1,5,1)
    }
};

const mainChar = new Person("Adam", 10); 
const snake = new Monster("Snake");
const satyr = new Monster("Satyr"); 

const monsterArr = [snake,satyr]; 
//let monster = "";

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
    monster = monsterGen(); 
    loadEnemy(monster) //what is in parentheses must be a var the stores the random monster that is generated
    //console.log(`${mainChar.name} vs ${monster.name}`); //can add as a header for when battle starts; 
    }
    }
})

//let currentChar = {...mainChar}

heroHp.textContent = "HP: " + mainChar.hp;
heroLvl.textContent = "Lvl: " + mainChar.level;

//Attack Button
attBtn.addEventListener("click", () => {

    if(inBattle){
        
        alert("You attacked");
        monster.hp -= mainChar.attack;
        enemyHp.textContent = "HP: " + monster.hp;

        if(monster.hp <= 0){
            alert("you Won");
            battleEnd();
            mainChar.level ++;
            mainChar.baseHp ++;
            mainChar.attack ++;
            heroLvl.textContent = "Level: " + mainChar.level;
        
        }else{
            alert(`${monster.name} attacked back!`);
            mainChar.hp -= monster.attack; 
        }

     
   
        heroHp.textContent = "HP: " + mainChar.hp;
        

        if(mainChar.hp <= 0){
            alert("You overexert yourself and suffer a fatal wound, Joshua finds you but it's too late")
            inBattle =false;
            alive = false;
        }
        

    }else {
        alert("There's nothing there silly");
    }
})

runBtn.addEventListener("click", () => {
    if(inBattle){
        
        alert("You ran away");
        battleEnd()
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

function loadEnemy(creature){
    inBattle = true; 
    img.src = `${creature.name}.jpg`;
    img.id = "enemy-img";
    img.alt= "Image of an enemy"
    enemeyStats.appendChild(img); 
    enemyName.textContent = creature.name;   
    enemyLvl.textContent = `Level: ${creature.level}`; 
    enemyHp.textContent = `HP: ${creature.hp}`;
}

function battleEnd() {
    img.src="";
    img.alt = "";
    enemyName.textContent = ""; 
    enemyHp.textContent = "";
    enemyLvl.textContent = "";
    inBattle = false;
}

function monsterGen(){
    let num = Math.round(Math.random())
    let genM = monsterArr[num]
    let genMonster = {...genM}
    return (genMonster);
}