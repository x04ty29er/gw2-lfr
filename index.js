var Raid = require('./raid');
var Player = require('./player');

var p1 = new Player("accountName.1234");
var p2 = new Player("accoutn.123");

p1.canLead = true;

console.log(p1);
console.log(p2);