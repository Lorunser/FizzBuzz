function Convert(num){
    var message = "";

    if(num % 3 == 0){
        message = message + "Fizz";
    }
    
    if(num % 5 == 0){
        message = message + "Buzz";
    }

    if(num % 7 == 0){
        message = message + "Bang"; 
    }
    

    //default case
    if(message == ""){
        message = String(num)
    }

    return message;
}


for(var i = 1; i <= 100; i++){
    var message = Convert(i);
    console.log(message);
}