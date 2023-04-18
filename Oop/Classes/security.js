//система безпеки
class SecuritySystem extends SmartHouse {
    constructor(name, state) {
        super(name, state);
        this.isActive = false;
        this.doorsSensors = false;
        this.videoSurveillance = false;
        this.motionSensors = false;
        this.sensors = [];
    }

    activate() {
        this.isActive = true;
        console.log('Alarm system is activated');
    }

    deactivate() {
        this.isActive = false;
        console.log('Alarm system is deactivated');
    }

    addSensor(sensor) {
        this.sensors.push(sensor);
    }

    removeSensor(sensor) {
        const index = this.sensors.indexOf(sensor);
        if (index !== -1) {
            this.sensors.splice(index, 1);
        }
    }

    turnOnDoorsSensors() {
        this.doorsSensors = true;
        console.log("Doors sensors are turned on.");
    }

    turnOffDoorsSensors() {
        this.doorsSensors = false;
        console.log("Doors sensors are turned off.");
    }

    turnOnVideoSurveillance() {
        this.videoSurveillance = true;
        console.log("Video surveillance is turned on.");
    }

    turnOffVideoSurveillance() {
        this.videoSurveillance = false;
        console.log("Video surveillance is turned off.");
    }

    turnOnMotionSensors() {
        this.motionSensors = true;
        console.log("Motion sensors are turned on.");
    }

    turnOffMotionSensors() {
        this.motionSensors = false;
        console.log("Motion sensors are turned off.");
    }

    getSecurityStatus() {
        return {
            isActive: this.isActive,
            doorsSensors: this.doorsSensors,
            videoSurveillance: this.videoSurveillance,
            motionSensors: this.motionSensors,
        };
    }
}