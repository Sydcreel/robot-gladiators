//declare player's name
var playerName = window.prompt("What is your robot's name?");

//declare player's health
var playerHealth = 100;

//declare player's attack
var playerAttack = 10;

//declare enemy's name
var enemyName = "Roborto";

//declare enemy's health
var enemyHealth = 50;

//declare enemy's attack
var enemyAttack = 12;

//declare player's money
var playerMoney = 10;

//create fight function
var fight = function() {
    //Alert player that game started
    window.alert("Welcome to Robot Gladiators!");
};

//execute fight function
fight();

//Prompt player to choose between fighting or skipping round
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

//If player chooses to fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    //Remove enemy's health by subtracting amount set in playerAttack var
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

//Check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left");
}

//Remove player's health by subtracting amount set in enemyAttack var
playerHealth = playerHealth - enemyAttack;
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

//Check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}

//If player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    //if no (false), ask again by running fight() again
    else {
        fight();
    }
}