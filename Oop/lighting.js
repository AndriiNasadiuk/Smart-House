// система освітлення
class LightingSystem extends SmartHouse {
    constructor(name, state) {
        super(name);
        this.state = state;
        this.lights = [];
    }

    turnOn() {
        this.state = "on";
        console.log(`Lighting system is turned on`);
    }

    turnOff() {
        this.state = "off";
        console.log('Lighting system is turned off');
    }

    setBrightness(brightness) {
        this.brightness = brightness;
        console.log(`${this.name} brightness is set to ${this.brightness}`);
    }

    addLight(light) {
        this.lights.push(light);
    }

    removeLight(light) {
        const index = this.lights.indexOf(light);
        if (index !== -1) {
            this.lights.splice(index, 1);
        }
    }
}

