let x = prompt("Guess a no. between 1 -10")
x = Number.parseInt(x);
while(x!=5){
    if(x>5){
        alert("Your guess is lower put some high no")
    }else{
        alert("Your guess is too high")
    }
    x = prompt("Guess a no. between 1 -10")
    x = Number.parseInt(x);
}
alert("You have guessed the right no")