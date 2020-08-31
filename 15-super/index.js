class Hero {
    constructor(name, hp, damage) {
        this.name = name;
        this.hp = hp;
        this.damage = damage;
    }

    applyDamage(damage) {
        this.hp = this.hp - damage;
    }

    attack(enemy) {
        enemy.applyDamage(this.damage);
    }
}

class RangeHero extends Hero { // subclass
    constructor(name, hp, damage, range) {
        super(name, hp, damage);
        this.range = range;
    }

    attack(enemy) {
        super.attack(enemy);
        this.hp += this.damage;
    }
}


const HeroA = new RangeHero('A', 100, 10);
const HeroB = new Hero('B', 200, 5);
console.log({HeroA, HeroB});
HeroA.attack(HeroB);
console.log({HeroA, HeroB});


