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

//create fight function
var fight = function() {
    //Alert player that game started
    window.alert("Welcome to Robot Gladiators!");

    //Subtract playerAttack from enemyHealth, updates enemyHealth var
    enemyHealth = enemyHealth - playerAttack;

    //Log resulting message to console
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

    //Subtract enemyAttack from playerHealth, updates playerHealth var
    playerHealth = playerHealth - enemyAttack;

    //Log resulting message to console
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
};

//execute fight function
fight();