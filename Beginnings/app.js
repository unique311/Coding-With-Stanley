// basics

// string
var suit;
var card;
suit = "hearts";
var greetings;
greetings = "hello stanley, welcome";
var anotherSuit = "spades";

//////////////////////////////////////////////
//number
var x = 7;

//////////////////////////////////////////////
var kitchenTool = "spoon";
var myColors = 'orange';
var x = 4;
var doorNmb = 8;

//array
var myCars = ["Ford", "Toyota", "Lexus"];
//object
var person = {firstname : 'stanley', lastname : 'dufresne'};
//null
greetings = null;
//undefined
var steph
//assignment operators  = :: += :: -=
x -= 44;

// Operation Precedence // what comes first
var stan = 150 + 70 * 4;
var stan1 = 150 * 70 + 4;
var stan2 = ( 150 + 70 ) * 4;

// String Operators Concatination // combining stuff
var one = 'Show Me';
var two = 'The Money';
var three = one + " " + two;

var c = "Hello";
c += " World!";

// comparison operators :: return true or false value
// == === != !== < > <= >= 
var a = 7;
var b = 8;

// logical operators :: && ||
a < 10 && b > 3;
x < 20 || b > 7;

/* typeof operator :: tells you what you are dealing with basically
ex. typeof myCars will return object*/

//arrays
var myData = [7, 'john', 20, 'hello world', 420];

/* myData [4] will return hello world
adding and removing elements in an array :: popping or pushing
popping will remove  ::  pushing will add*/
myData.push ('hello stephluva');  //add stephluva
myData.pop (7);  //remove 7

/* conditionals
if statement
else statement
*/
var myCode = 6;

if (myCode) {
    console.log('lucky 7!');
}

/////////////////////////////////////////////////// 

var myCode1 = 10;

if (myCode1 == 7) {
    ('lucky 7!');
}else{
    console.log('youre not lucky...');
    }

// FUNCTIONS :: block of code for particular task
function myStephluva(love1, love2) {
    var result = love1 <= love2;
    return result;
}
myStephluva(10,20);
myStephluva(3,7);


// EVENTS code that listen and respond by running a code
document.querySelector('html').onclick = function () {
        alert('Ouch! stop poking me!');
    };


// MIXING DATA TYPES
// array look at
var k = ['jason', 200, 'helen'];

var l = 7 + 7;
var p = "7" + 89;