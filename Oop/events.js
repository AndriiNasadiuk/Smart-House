// Створення екземплярів класів
const smartHouse = new SmartHouse("Andy's house");

const securitySystem = new SecuritySystem("Security");
smartHouse.addComponent(securitySystem);

const lightingSystem = new LightingSystem("Lightting");
smartHouse.addComponent(lightingSystem);

const climateSystem = new ClimateSystem("Climate");
smartHouse.addComponent(climateSystem);

const applianceSystem = new ApplianceSystem("Apliances");
smartHouse.addComponent(applianceSystem);

//Лампочка
const lamp1 = new Light("lamp1");
lightingSystem.addComponent(lamp1);


//Включаємо на панелі керування світло
const lightOnButton = document.getElementById("lights-on");

lightOnButton.addEventListener("click", () => {
    lightOnButton.innerHTML = "Light is on";
    lightOnButton.style.backgroundColor = "lightYellow";
    lightOnButton.style.color = "blue";
    // console.log(lightingSystem.turnOn());
    lamp1.setState("on");
    lamp1.setBrightness(80);
    console.log(lamp1);
    lightingSystem.turnOn();
    console.log(lightingSystem);
});
//Виключаємо на панелі керування світло
const lightOffButton = document.getElementById("lights-off");

lightOffButton.addEventListener("click", () => {
    lightOnButton.innerHTML = "Turn on";
    lightOnButton.style.backgroundColor = "rgb(24, 162, 248)";
    lightOnButton.style.color = "white";
    console.log(lamp1.setState("off"));
    console.log(lamp1);
    lightingSystem.turnOff();
    console.log(lightingSystem);
});
//Задаємо температуру на панелі керування 
const setTempButton = document.getElementById("set-temperature");
setTempButton.addEventListener("click", () => {
    let currentTemperature = document.getElementById("temperature").value;
    if (currentTemperature === "") {
        alert(currentTemperature + "Set comfortable temperature");
    } else {
        climateSystem.setTemperature(currentTemperature);
    }
});
//Задаємо вологість на панелі керування 
const setHumButton = document.getElementById("set-humidity");
setHumButton.addEventListener("click", () => {
    let currenthumidity = document.getElementById("humidity").value;
    if (currenthumidity === "") {
        alert(currenthumidity + "Set comfortable humidity");
    } else {
        climateSystem.setHumidity(currenthumidity);
    }
});
//Запитуємо статус кліматичної системи на панелі керування 
const getClimateStatusButton = document.getElementById("climate-status");
getClimateStatusButton.addEventListener('click', () => {
    console.log(climateSystem.getClimateStatus());
});
//Вмикаємо кондиціонер(і вимикаємо тією ж кнопкою)
const conditionerButton = document.getElementById("conditioner");

let isAirConditionerOn = false;

conditionerButton.addEventListener('click', () => {
    if (isAirConditionerOn) {
        conditionerButton.innerHTML = "A/C is off";
        conditionerButton.style.backgroundColor = "rgb(24, 162, 248)";
        conditionerButton.style.color = "white";
        console.log(climateSystem.turnOffAirConditioner());
        isAirConditionerOn = false;
    } else {
        conditionerButton.innerHTML = "A/C is on";
        conditionerButton.style.backgroundColor = "lightYellow";
        conditionerButton.style.color = "blue";
        console.log(climateSystem.turnOnAirConditioner());
        isAirConditionerOn = true;
    }
});
//Вмикаємо обігрівач(і вимикаємо тією ж кнопкою)
const heaterButton = document.getElementById("heater");

let isHeaterOn = false;

heaterButton.addEventListener('click', () => {
    if (isHeaterOn) {
        heaterButton.innerHTML = "Heater is off";
        heaterButton.style.backgroundColor = "rgb(24, 162, 248)";
        heaterButton.style.color = "white";
        console.log(climateSystem.turnOffHeater());
        isHeaterOn = false;
    } else {
        heaterButton.innerHTML = "Heater is on";
        heaterButton.style.backgroundColor = "lightYellow";
        heaterButton.style.color = "blue";
        console.log(climateSystem.turnOnHeater());
        isHeaterOn = true;
    }
});
//Сигналізація (ввімкнути/вимкнути)
const alarmButton = document.getElementById("alarm");

let isAlarmOn = true;

alarmButton.addEventListener('click', () => {
    if (isAlarmOn) {
        alarmButton.innerHTML = "Alarm is on";
        alarmButton.style.backgroundColor = "lightYellow";
        alarmButton.style.color = "blue";
        console.log(securitySystem.activate());
        isAlarmOn = false;
    } else {
        alarmButton.innerHTML = "Alarm is off";
        alarmButton.style.backgroundColor = "rgb(24, 162, 248)";
        alarmButton.style.color = "white";
        console.log(securitySystem.deactivate());
        isAlarmOn = true;
    }
});
//Датчики ддверей
const doorsButton = document.getElementById("doors");

let areDoorsOpen = false;
const doors = new DoorSensor();
securitySystem.addSensor(doors);
doors.addSensor(doors);

doorsButton.addEventListener('click', () => {
    if (areDoorsOpen) {
        doorsButton.innerHTML = "Doors are open";
        doorsButton.style.backgroundColor = "rgb(24, 162, 248)";
        doorsButton.style.color = "white";
        console.log(securitySystem.turnOffDoorsSensors());
        areDoorsOpen = false;
    } else {
        doorsButton.innerHTML = "Doors are closed";
        doorsButton.style.backgroundColor = "lightYellow";
        doorsButton.style.color = "blue";
        console.log(securitySystem.turnOnDoorsSensors());
        areDoorsOpen = true;
    }
});
//відео спостереження
const videoButton = document.getElementById("video");

let isvideoOn = true;
const video = new VideoSurveillance();
securitySystem.addSensor(video);
// video.setState("inactive");

videoButton.addEventListener('click', () => {
    if (isvideoOn) {
        videoButton.innerHTML = "video is on";
        videoButton.style.backgroundColor = "lightYellow";
        videoButton.style.color = "blue";
        console.log(securitySystem.turnOnVideoSurveillance());
        isvideoOn = false;
    } else {
        videoButton.innerHTML = "video is off";
        videoButton.style.backgroundColor = "rgb(24, 162, 248)";
        videoButton.style.color = "white";
        console.log(securitySystem.turnOffVideoSurveillance());
        isvideoOn = true;
    }
});

//датчики руху
const motionButton = document.getElementById("motion");

let ismotionOn = true;
const motion = new MotionSensor();
securitySystem.addSensor(motion);
// motion.setState("inactive");

motionButton.addEventListener('click', () => {
    if (ismotionOn) {
        motionButton.innerHTML = "MSs are on";
        motionButton.style.backgroundColor = "lightYellow";
        motionButton.style.color = "blue";
        console.log(securitySystem.turnOnMotionSensors());
        ismotionOn = false;
    } else {
        motionButton.innerHTML = "MSs are off";
        motionButton.style.backgroundColor = "rgb(24, 162, 248)";
        motionButton.style.color = "white";
        console.log(securitySystem.turnOffMotionSensors());
        ismotionOn = true;
    }
});

//Запитуємо статус кліматичної системи на панелі керування 
const securityStatusButton = document.getElementById("security-status");
securityStatusButton.addEventListener('click', () => {
    console.log(securitySystem.getSecurityStatus());
});

//Холодильник
const fridgeButton = document.getElementById("fridge");
const fridge = new Fridge("fridge Electrolux");

applianceSystem.addAppliance(fridge);
let isFridgeOn = true;


fridgeButton.addEventListener('click', () => {
    if (isFridgeOn) {
        fridgeButton.innerHTML = "fridge is on";
        fridgeButton.style.backgroundColor = "lightYellow";
        fridgeButton.style.color = "blue";
        fridge.setState("on");
        console.log(applianceSystem.turnOn(fridge.name));
        console.log(fridge);
        isFridgeOn = false;
    } else {
        fridgeButton.innerHTML = "fridge is off";
        fridgeButton.style.backgroundColor = "rgb(24, 162, 248)";
        fridgeButton.style.color = "white";
        fridge.setState("off");
        console.log(fridge);
        console.log(applianceSystem.turnOff(fridge.name));
        isFridgeOn = true;
    }
});

//Кавоварка
const coffeeMakerButton = document.getElementById("coffee-maker");
const coffeeMaker = new SmartCoffeeMaker("coffee maker Saeco");
// coffeeMaker.setState("on");
applianceSystem.addAppliance(coffeeMaker);
let coffeeMakerIsOn = true;

coffeeMakerButton.addEventListener('click', () => {
    if (coffeeMakerIsOn) {
        coffeeMakerButton.innerHTML = "CM is on";
        coffeeMakerButton.style.backgroundColor = "lightYellow";
        coffeeMakerButton.style.color = "blue";
        console.log(applianceSystem.turnOn(coffeeMaker.name));
        coffeeMakerIsOn = false;
    } else {
        coffeeMakerButton.innerHTML = "CM is off";
        coffeeMakerButton.style.backgroundColor = "rgb(24, 162, 248)";
        coffeeMakerButton.style.color = "white";
        console.log(applianceSystem.turnOff(coffeeMaker.name));
        coffeeMakerIsOn = true;
    }
});

//Пральна машина
const washMachineButton = document.getElementById("washing-machine");
const washMachine = new WashingMachine("washing machine Mille");
// washMachine.setState("on");
applianceSystem.addAppliance(washMachine);
let washMachineIsOn = true;

washMachineButton.addEventListener('click', () => {
    if (washMachineIsOn) {
        washMachineButton.innerHTML = "WM is on";
        washMachineButton.style.backgroundColor = "lightYellow";
        washMachineButton.style.color = "blue";
        console.log(applianceSystem.turnOn(washMachine.name));
        washMachineIsOn = false;
    } else {
        washMachineButton.innerHTML = "WM is off";
        washMachineButton.style.backgroundColor = "rgb(24, 162, 248)";
        washMachineButton.style.color = "white";
        console.log(applianceSystem.turnOff(washMachine.name));
        washMachineIsOn = true;
    }
});

//Духовка, плита
const ovenButton = document.getElementById("oven");
const oven = new Oven("oven Siemens");
// oven.setState("on");
applianceSystem.addAppliance(oven);
let ovenIsOn = true;

ovenButton.addEventListener('click', () => {
    if (ovenIsOn) {
        ovenButton.innerHTML = "Oven is on";
        ovenButton.style.backgroundColor = "lightYellow";
        ovenButton.style.color = "blue";
        oven.setState("on");
        console.log(applianceSystem);
        ovenIsOn = false;
    } else {
        ovenButton.innerHTML = "Oven is off";
        ovenButton.style.backgroundColor = "rgb(24, 162, 248)";
        ovenButton.style.color = "white";
        oven.setState("off");
        console.log(applianceSystem.turnOff(oven.name));
        ovenIsOn = true;
    }
});

// Телевізор, ввімкнення/вимкнення
const tvPowerButton = document.getElementById('tv-power-button');
const tv = new SmartTV("Sony");
applianceSystem.addAppliance(tv);
let tvIsOn = true;

tvPowerButton.addEventListener('click', () => {
    if (tvIsOn) {
        tvPowerButton.innerHTML = "TV is on";
        tvPowerButton.style.backgroundColor = "lightYellow";
        tvPowerButton.style.color = "blue";
        tv.turnOn();
        console.log(applianceSystem.turnOn(tv.name));
        console.log(applianceSystem);
        console.log(tv.currentChannel);
        tvIsOn = false;
    } else {
        tvPowerButton.innerHTML = "TV is off";
        tvPowerButton.style.backgroundColor = "rgb(24, 162, 248)";
        tvPowerButton.style.color = "white";
        tv.turnOff();
        console.log(applianceSystem.turnOff(tv.name));
        console.log(applianceSystem);
        tvIsOn = true;
    }
});

const showChannels = document.getElementById("tv-show-channels");
showChannels.addEventListener("click", () => {
    tv.showChannels();
});

const channelUpButton = document.getElementById("tv-channel-up-button");
const channelDownButton = document.getElementById("tv-channel-down-button");
const volumeUpButton = document.getElementById("tv-volume-up-button");
const volumeDownButton = document.getElementById("tv-volume-down-button");

channelUpButton.addEventListener("click", () => {
    tv.channelUp();
});

channelDownButton.addEventListener("click", () => {
    tv.channelDown();
});
volumeUpButton.addEventListener("click", () => {
    tv.volumeUp();
});

volumeDownButton.addEventListener("click", () => {
    tv.volumeDown();
});

