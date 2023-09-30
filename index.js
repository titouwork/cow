const données = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: "I'm " + données.name + " from " + données.campus,
    e : "oO",
    T : "U "
}));