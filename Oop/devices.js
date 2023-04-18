// Клас "лампочка"
class Light extends LightingSystem {
    constructor(name, state) {
        super(state);
        this.name = name;
        this.state = 'off';
    }

    setState(state) {
        if (state === 'on' || state === 'off') {
            console.log(`Light is ${state}`);
            this.state = state;
        } else {
            console.log('Light"s state should be "on" or "off"');
        }
    }
}

// Клас "датчик дверей"
class DoorSensor extends SecuritySystem {
    constructor(state) {
        super(state);
        this.state = 'closed';
    }

    setState(state) {
        if (state === 'open' || state === 'closed') {
            console.log(`Doors are  ${state}`);
            this.state = state;
        } else {
            console.log('Doors state should be  "open" or "closed"');
        }
    }
}

// Клас "відеонагляд"
class VideoSurveillance extends SecuritySystem {
    constructor(state) {
        super(state);
        this.state = 'inactive';
    }

    setState(state) {
        if (state === 'active' || state === 'inactive') {
            console.log(`Video surveillance is ${state}`);
            this.state = state;
        } else {
            console.log('Video surveillance state should be "active" or "inactive"');
        }
    }
}

// Клас "датчик руху"
class MotionSensor extends SecuritySystem {
    constructor(state) {
        super(state);
        this.state = 'inactive';
    }

    setState(state) {
        if (state === 'active' || state === 'inactive') {
            console.log(`Motion sensor is ${state}`);
            this.state = state;
        } else {
            console.log('Motion sensor state should be "active" or "inactive"');
        }
    }
}

// Клас "холодильник"
class Fridge extends ApplianceSystem {
    constructor(state) {
        super(state);
        this.state = 'off';
    }

    setState(state) {
        if (state === 'on' || state === 'off') {
            console.log(`Fridge is ${state}`);
            this.state = state;
        } else {
            console.log(`Fridge's state sould be "on" or "off"`);
        }
    }
}

// Клас "піч"
class Oven extends ApplianceSystem {
    constructor(state) {
        super(state);
        this.state = 'off';
    }

    setState(state) {
        if (state === 'on' || state === 'off') {
            console.log(`Oven is ${state}`);
            this.state = state;
        } else {
            console.log(`Oven's state should be "on" or "off"`);
        }
    }
}

// Клас "пральна машина"
class WashingMachine extends ApplianceSystem {
    constructor(state) {
        super(state);
        this.state = 'off';
    }

    setState(state) {
        if (state === 'on' || state === 'off') {
            console.log(`Washing machine is ${state}`);
            this.state = state;
        } else {
            console.log(`Washing machine's state should be "on" or "off"`);
        }
    }
}

// Клас "розумна кавоварка"
class SmartCoffeeMaker extends ApplianceSystem {
    constructor(state) {
        super(state);
        this.state = 'off';
    }

    setState(state) {
        if (state === 'on' || state === 'off') {
            console.log(`Розумна кавоварка переведена в стан ${state}`);
            this.state = state;
        } else {
            console.log('Стан розумної кавоварки повинен бути "on" або "off"');
        }
    }
}

