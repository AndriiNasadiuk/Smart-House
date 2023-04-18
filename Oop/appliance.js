//Пристрої
class ApplianceSystem extends SmartHouse {
    constructor(name, state) {
        super(name, state);
        this.appliances = [];
    }
    turnOn(appliance) {
        console.log(`${appliance} is on`);
    }

    turnOff(appliance) {
        console.log(`${appliance} is off`);
    }

    addAppliance(appliance) {
        this.appliances.push(appliance);
    }

    removeAppliance(appliance) {
        const index = this.appliances.indexOf(appliance);
        if (index !== -1) {
            this.appliances.splice(index, 1);
        }
    }
}