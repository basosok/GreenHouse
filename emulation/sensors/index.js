import Sensor from "./sensor.js";

let sensors = {};
sensors.humiditySensor = new Sensor("Humidity", 1, 3);
sensors.aciditySensor = new Sensor("Acidity", 1, 1);
sensors.temperatureSensor = new Sensor("Temperature", 7, 2);

export default sensors;
