import { getBatteryPower } from './function.js';
import battery from './battery.js';

window.addEventListener('load', () => {
    console.log('Battery Import: ', getBatteryPower(battery));
})