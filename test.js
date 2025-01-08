class GameCharacter{
    constructor(name, level, hp, attack){
           this.name = name;
           this.level = level;
           this.hp = hp;
           this.attack = attack;
    }
}

// class Person extends GameCharacter {
//     constructor(name, baseHp){
//         super(name, 1, 10, 1);
//         this.baseHp = baseHp;
//     }
// } 

// const adam = new Person("adam", 10); 

// console.log(adam); 


class Monster extends GameCharacter{
    constructor(name){
        super(name, 1,5,1)
    }
};

const snake = new Monster("snake"); 

console.log(snake)