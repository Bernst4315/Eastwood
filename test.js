class GameCharacter{
    constructor(name, level, hp, attack){
           this.name = name;
           this.level = level;
           this.hp = hp;
           this.attack = attack;
    }
}

class Monster extends GameCharacter{
    constructor(name){
        super(name, 1,5,1)
    }
};

const snake = new Monster("Snake");
const satyr = new Monster("Satyr");

const monsterArr = [snake,satyr];

function monsterGen(){
    let num = Math.round(Math.random())
    genMonster = monsterArr[num]
    return (genMonster);
}

console.log(monsterGen());