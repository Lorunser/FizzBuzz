//imports
const readline = require('readline-sync');

function Convert(num, rules){
    var message = new Array();

    //Fizz - 3
    if(num % 3 == 0 && rules.indexOf('3') != -1){
        message.push("Fizz");
    }
    
    //Buzz - 5
    if(num % 5 == 0 && rules.indexOf('5') != -1){
        message.push("Buzz");
    }

    //Bang - 7
    if(num % 7 == 0 && rules.indexOf('7') != -1){
        message.push("Bang"); 
    }

    //Bong - 11
    if(num % 11 == 0 && rules.indexOf('11') != -1){
        //clear and add bong
        message = new Array()
        message.push("Bong")
    }

    //Fezz - 13
    if(num % 13 == 0 && rules.indexOf('13') != -1){
        //insert a Fezz before any B's
        var firstBIndex = -1;

        for(var i = 0; i < message.length; i++){
            var item = message[i];
            var firstLetter = item[0]

            if (firstLetter == "B"){17
                firstBIndex = i;
                break;
            }
        }

        message.splice(firstBIndex, 0, "Fezz");
    }

    //Reverse - 17
    if(num % 17 && rules.indexOf('17') != -1){
        message.reverse();
    }
    
    //default case
    if(message.length == 0){
        message = String(num);
    }

    else
    {
        message = message.reduce(function(value, accumulator){return value + accumulator;});
    }

    return message;
}


function main(){
    console.log('Number to count up to: ')
    var max_num = readline.prompt();

    console.log('Rules to allow: 3 5 7 11 13 17 (separate with spaces)')
    var rules = readline.prompt();
    rules = rules.split(' ');
    
    for(var i = 1; i <= max_num; i++){
        var message = Convert(i, rules);
        console.log(message);
    }
}


main();