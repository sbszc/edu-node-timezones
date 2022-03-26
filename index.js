const momentTimezone = require("moment-timezone");

momentTimezone.tz.setDefault("America/Bogota");

let targetTimezone;
if (process.argv.length != 3) {
    console.log("usage: node index.js <timezone>");
    process.exit(1);
} else {
    targetTimezone = process.argv[2];
}

let convertedTime;
try {
    convertedTime = momentTimezone().tz(targetTimezone).format();
} catch (error) {
    console.log(error);
    console.log("bad timezone");
    process.exit(1);
}

console.log(`The time in ${targetTimezone} is ${convertedTime}`);