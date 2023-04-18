//Клас "телевізор"
class SmartTV extends ApplianceSystem {
    constructor(name) {
        super(name);
        this.isOn = false;
        this.currentChannel = null;
        this.volume = 50;
        this.channels = {
            1: "Інтер",
            2: "Україна",
            3: "1+1",
            4: "НТН",
            5: "К-1",
            6: "UA:Перший",
            7: "ICTV",
            8: "ZOOM",
            9: "Індиго",
            10: "СТБ",
            11: "ТЕТ",
            12: "К-2",
            13: "Новий",
            14: "M1",
            15: "Прямий",
            16: "Мега",
            17: "Піксель",
            18: "XSPORT",
            19: "НЛО-ТВ",
            20: "2+2",
            21: "ZIK",
            22: "ЕСПРЕСО",
            23: "ПЛЮСПЛЮС",
            24: "УНІАН",
            25: "5 канал",
            26: "UA:Культура",
            27: "Рада",
            28: "Україна 24",
            29: "4 канал",
        }

    }

    turnOn() {
        this.isOn = true;
        console.log(`${this.name} включений`);
    }

    turnOff() {
        this.isOn = false;
        console.log(`${this.name} вимкнений`);
    }

    showChannels() {
        if (this.isOn) {
            const modal = document.getElementById("modal");
            const modalContent = modal.querySelector(".modal-content");

            modal.style.display = "block";

            modalContent.innerHTML = "";
            const showChannel = Object.values(this.channels);
            showChannel.forEach((channel) => {
                const button = document.createElement("button");
                button.textContent = channel;
                button.addEventListener("click", () => {
                    console.log(`Ви вибрали канал ${channel}`);
                    //
                    modal.style.display = "none";
                });
                modalContent.appendChild(button);
            });
        } else {
            console.log("TV is off.");
        }
    }

    channelUp() {
        if (this.isOn) {
            const keys = Object.keys(this.channels);
            const currentValue = this.channels[keys[this.currentChannel]];
            console.log(currentValue);
            this.currentChannel = (this.currentChannel + 1) % keys.length;

        } else {
            console.log("TV is off.");
        }
    }

    channelDown() {
        if (this.isOn) {
            const keys = Object.keys(this.channels);
            const currentValue = this.channels[keys[this.currentChannel]];
            console.log(currentValue);
            this.currentChannel = (this.currentChannel - 1) % keys.length;

        } else {
            console.log("TV is off.");
        }
    }

    volumeUp() {
        if (this.isOn) {
            this.volume++;
            console.log(`Volume changed to ${this.volume}.`);
        } else {
            console.log("TV is off.");
        }
    }

    volumeDown() {
        if (this.isOn) {
            this.volume--;
            console.log(`Volume changed to ${this.volume}.`);
        } else {
            console.log("TV is off.");
        }
    }

}




