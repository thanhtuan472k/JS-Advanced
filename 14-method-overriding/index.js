class CoffeeMachine {
    makeCoffee() {
        console.log('Making coffee...');
    }
}

class SpecialCoffeeMachine extends CoffeeMachine {
    makeCoffee() {
        console.log('Making coffee and do something...');
    }
}

const coffeeMachine = new SpecialCoffeeMachine();
coffeeMachine.makeCoffee();

