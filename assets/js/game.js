

var playerName = window.prompt("whats your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney  = 10;

// you can log multiple values at one like this

console.log(playerName,playerHealth,playerAttack);


var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
// Alert players that they are starting the round.
    window.alert("Welcome to Robot Gladiators!");
    


}

var promptFight = window.prompt ("would you like to 'FIGHT' or 'SKIP' to chose.");
// here we have created a variable outside the function . we use var to create a new variable but here we want to update the value of a variable that already exists.
// using the var key would create a new enemyHealth variable inside the figth function , meaning that the enemyHealth variable we created at the top of the file and outside the function 
// would be unaffected. 

//If player choose to fight, then fight 
if (promptFight === "fight" || promptFight === "FIGHT") {
    
    enemyHealth = enemyHealth - playerAttack;

    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining "
    );

    
// check enemy's health 

if (enemyHealth <= 0){
    window.alert(enemyName + " has died! ");

}
else {   window.alert (enemyName + " still has " +  enemyHealth + " health left ");
}
  


// Log a resulting message to the console so we know that it worked. 

// subtract the value of 'enemyAttack' from the value of 'playerAttack' and use that result to update the value in the 'playerHealth' variable
// remove players health by subracting the amount set in the enemyAttack variable
// check player's health .
playerHealth = playerHealth - enemyAttack;

console.log(
    enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining"
);

// check player's health .

if (playerHealth <= 0){
    window.alert (playerName + " has died!");

}
 else {
    window.alert(playerName + " still has " + playerHealth + " health left .");
 }
}


// if player choses to skip 
else if (promptFight === "SKIP" || promptFight === "skip"){
    //window.alert (playerName + " has chosen to skip the fight!");

    var confirmSkip = window.confirm("Are you sure you would like to quit ?");

    // If yes (true), leave fight 
    if (confirmSkip){
        window.alert(playerName + " has decided to skip this fight . Goodbye!!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;

    }
// if no (false), ask question agian by running fight () again
else{
    fight();
}

}

else {
    window.alert("you need to choose a valid optio. Try again!");
}















fight();



