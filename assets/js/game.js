// Game states
// player wins
// * player robot fight all the enemies .
// * player robot defeat all the enemies.

// player lost
// * player health value is 0 or less.

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// fight function expressions.
var fight = function (enemyName) {
  window.alert("Welcome to Robot Gladiators!");

  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
  );

  // if player choses a fight, then fight
  if (promptFight === "FIGHT" || promptFight === "fight") {
    //   enemyHealth will be subtract from player attack value .
    enemyHealth = enemyHealth - playerAttack;

    console.log(
      playerName +
        " attacked " +
        enemyName +
        " . " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining ."
    );
    //   checks enemy health
    if (enemyHealth <= 0) {
      Window.alert("The player has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left ");
    }

    //   playerHealth
    playerHealth = playerHealth - enemyAttack;

    console.log(
      enemyName +
        " has attacked " +
        playerName +
        " . " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );
    //   checks player health
    if (playerHealth <= 0) {
      window.alert("The player has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left ");
    }
  }
  //   if player chose to skip the fight
  else if (promptFight === "SKIP" || promptFight === "skip") {
    window.alert(playerName + " has decided to skip the fight!");
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true),leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip the fight . Goodbye!");
      //  subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    } else {
      fight();
    }
  }
  // if the player has not chosen to fight or skip
  else {
    window.alert("You need to choose a valid option .");
  }

  // subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;

  // log a resulting message to the console so we know that it worked.
  console.log(
    playerName +
      " attacked " +
      enemyName +
      " . " +
      enemyName +
      " now has " +
      enemyHealth +
      " health remaining. "
  );

  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died! ");
  } else {
    window.alert(enemyName + "still has " + enemyHealth + " health left .");
  }

  // Subtract the value of `EnemyAttack` from the value fo `PlayerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;
  // log a resulting message to the console so we know that it worked.
  console.log(
    enemyName +
      " attacked " +
      playerName +
      ". " +
      playerName +
      " now has " +
      playerHealth +
      " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died !");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left . ");
  }
};

for (var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}
