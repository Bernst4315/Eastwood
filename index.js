alert(
  "The Draco Knight and his goons invaded the town of Edenton, an idyllic town known for its apple orchards."
);
alert(
  "They have taken the love of your life and mayor Peleus’ daughter, Eva, hostage."
);
alert(
  "You couldn’t hold them back and was unfortunately driven out of town. Fleeing to the nearby forest you meet Joshua the hermit."
);
alert(
  "He takes you in, and after hearing of your plight he offers his help to train your skills"
);

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
let bossBattle = false;

class GameCharacter {
  constructor(name, level, hp, attack) {
    this.name = name;
    this.level = level;
    this.hp = hp;
    this.attack = attack;
  }
}

class Person extends GameCharacter {
  constructor(name, baseHp) {
    super(name, 1, 10, 1);
    this.baseHp = baseHp;
  }
}

class Monster extends GameCharacter {
  constructor(name, level, hp, attack) {
    super(name, level, hp, attack);
  }
}

const mainChar = new Person("Adam", 10);
const snake = new Monster("Snake", 1, 5, 1);
const satyr = new Monster("Satyr", 1, 5, 2);
const dracoKnight = new Monster("Draco Knight", 15, 15, 6);

const monsterArr = [snake, satyr];

//Rest feature: Allows Player to restore health
restBtn.addEventListener("click", () => {
  if (alive) {
    if (inBattle || bossBattle) {
      alert("You can't rest now");
    } else {
      if (mainChar.hp < mainChar.baseHp) {
        alert(
          "Joshua: Looks like you need some rest. Come inside and refresh yourself"
        );
        heal();
      } else {
        alert("You're feeling fine, no need to rest");
      }
    }
  }
});

//Initiates a battle
battleBtn.addEventListener("click", () => {
  if (alive) {
    if (inBattle || bossBattle) {
      alert("You're already in a fight");
    } else {
      alert("you encountered a monster");
      monster = monsterGen();
      loadEnemy(monster);
      //console.log(`${mainChar.name} vs ${monster.name}`); //can add as a header for when battle starts;
    }
  }
});

heroHp.textContent = "HP: " + mainChar.hp;
heroLvl.textContent = "Lvl: " + mainChar.level;

//Attack Button
attBtn.addEventListener("click", () => {
  if (inBattle) {
    alert("You attacked");
    monster.hp -= mainChar.attack;
    enemyHp.textContent = "HP: " + monster.hp;

    if (monster.hp <= 0) {
      alert("you Won");
      battleEnd();
      mainChar.level++;
      mainChar.baseHp++;
      mainChar.attack++;
      heroLvl.textContent = "Level: " + mainChar.level;
    } else {
      alert(`${monster.name} attacked back!`);
      mainChar.hp -= monster.attack;
    }

    heroHp.textContent = "HP: " + mainChar.hp;

    if (mainChar.hp <= 0) {
      inBattle = false;
      alive = false;
      endings(1);
    }
  } else if (bossBattle) {
    alert("You attacked");
    monster.hp -= mainChar.attack;
    enemyHp.textContent = "HP: " + monster.hp;

    if (monster.hp <= 0) {
      alert("you Won");
      alert("Draco Knight: Juno I have failed you!");
      alert(
        "You give the Draco Knight a final blow and you triumphantly place your foot on your fallen enemy's head"
      );
      battleEnd();
      endings(0);
    } else {
      alert(`${monster.name} attacked back!`);
      mainChar.hp -= monster.attack;
    }

    heroHp.textContent = "HP: " + mainChar.hp;

    if (mainChar.hp <= 0) {
      bossBattle = false;
      alive = false;
      endings(2);
    }
  } else {
    alert("There's nothing there silly");
  }
});

runBtn.addEventListener("click", () => {
  if (inBattle) {
    alert("You ran away");
    battleEnd();
  } else if (bossBattle) {
    alert("You can't run away!");
  } else {
    alert("What?... Scared of you're own shadow?");
  }
});

boss.addEventListener("click", () => {
  if (alive) {
    if (mainChar.level < 5) {
      alert("Joshua: You're not strong enough, you shouldn't fight him yet");
      let proceed = confirm("Do you wish to continue?");
      if (proceed) {
        finalBattle();
      }
    } else {
      finalBattle();
    }
  }
});

function loadEnemy(creature) {
  inBattle = true;
  img.src = `${creature.name}.jpg`;
  img.id = "enemy-img";
  img.alt = "Image of an enemy";
  enemeyStats.appendChild(img);
  enemyName.textContent = creature.name;
  enemyLvl.textContent = `Level: ${creature.level}`;
  enemyHp.textContent = `HP: ${creature.hp}`;
}

function battleEnd() {
  img.src = "";
  img.alt = "";
  enemyName.textContent = "";
  enemyHp.textContent = "";
  enemyLvl.textContent = "";
  inBattle = false;
}

function monsterGen() {
  let num = Math.round(Math.random());
  let genM = monsterArr[num];
  let genMonster = { ...genM };
  return genMonster;
}

function finalBattle() {
  heal();
  loadEnemy(dracoKnight);
  inBattle = false;
  monster = { ...dracoKnight };
  bossBattle = true;
}

function heal() {
  mainChar.hp = mainChar.baseHp;
  return (heroHp.textContent = "HP: " + mainChar.hp);
}

function endings(x) {
  if (x === 0) {
    alert("True Ending");
    alert(
      "The months of training in the woods finally paid off! You beat back the Draco Knight and rescued Eva."
    );
    alert(
      "Mayor Peleus in gratitude gives you a valuable treasure that he had received as a wedding gift. A golden apple with the inscription 'Ti Kallisti'."
    );
    alert("Huh.... I wonder what that means?");
  } else if (x === 1) {
    alert("Unfortunate End");
    alert(
      "You overexert yourself and suffer a fatal wound, Joshua finds you but it's too late"
    );
  } else if (x === 2) {
    alert("Bad Ending");
    alert(
      "Sadly, you were not strong enough to defeat the Draco knight. As a result, you were taken into captivity and, along with Eva, the mayor, and the citizens of the town, were taken to the Draco Knight’s kingdom in the far east. "
    );
  }
}
