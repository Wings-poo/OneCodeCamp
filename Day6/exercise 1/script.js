// Avoid using built-in functions

var ninja1 = {
    hp: 100,
    strength: 15,
    attack: function () {
        let dmg = Math.floor(Math.random() * this.strength) + 1;
        return dmg;
    }
}

var ninja2 = {
    hp: 150,
    strength: 10,
    attack: function () {
        let dmg = Math.floor(Math.random() * this.strength) + 1;
        return dmg;
    }
}

// From Dether: add obj/fcn for hp update
// From Marko: added critical hit: const dmg = isCritical ? 50 : Math.floor(Math.random() * this.strength) + 1;

for (let i = 1; i <= 10; i++) {
    console.log(`===Round ${i}===`);

    let dmg1 = ninja1.attack();
    ninja2.hp -= dmg1;
    console.log(`Ninja1 attacks Ninja2 and does a damage of ${dmg1}! Ninja1 health: ${ninja1.hp}. Ninja2 health: ${ninja2.hp}`);

    let dmg2 = ninja2.attack();
    ninja1.hp -= dmg2;
    console.log(`Ninja1 attacks Ninja2 and does a damage of ${dmg2}! Ninja1 health: ${ninja1.hp}. Ninja2 health: ${ninja2.hp}`);
}
// From Marko: added conditional for ninja.hp < 0

if (ninja1.hp > ninja2.hp)
    console.log("Ninja1 WINS!!!!!");
else if (ninja1.hp < ninja2.hp)
    console.log("Ninja2 WINS!!!!!");
else
    console.log("DRAW");