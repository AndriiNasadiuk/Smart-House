class ClimateSystem extends SmartHouse {
    constructor(name, state) {
        super(name, state);
        this.temperature = 18;
        this.humidity = 50;
        this.airConditioner = false;
        this.heater = false;
    }

    setTemperature(temp) {
        this.temperature = temp;
        console.log(`Temperature is set to ${temp}°C.`);
    }

    setHumidity(hum) {
        this.humidity = hum;
        console.log(`Humidity is set to ${hum}%.`);
    }

    turnOnAirConditioner() {
        this.airConditioner = true;
        console.log("Air conditioner is turned on.");
    }

    turnOffAirConditioner() {
        this.airConditioner = false;
        console.log("Air conditioner is turned off.");
    }

    turnOnHeater() {
        this.heater = true;
        console.log("Heater is turned on.");
    }

    turnOffHeater() {
        this.heater = false;
        console.log("Heater is turned off.");
    }

    getClimateStatus() {
        return {
            temperature: this.temperature,
            humidity: this.humidity,
            airConditioner: this.airConditioner,
            heater: this.heater,
        };
    }
}

