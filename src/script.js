"use strict";

// TODO - write your code here.

// # 1
const randomDamage = () => Math.floor(Math.random() * 10 + 1);

// #2
const chooseOption = (opt1, opt2) => {
  const randNum = Math.floor(Math.random() * 2);
  return randNum ? opt2 : opt1;
};

// #3
const attackPlayer = (health) => health - randomDamage();

// #4
const logHealth = (player, health) =>
  console.log(`${player} health: ${health}`);

// #5
const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

// #6
const isDead = (health) => health <= 0;

// #7
const fight = (player1, player2, player1Health, player2Health) => {
  while (true) {
    const attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
};

// #8
fight("Ryan", "Paul", 100, 100);

// #Extended Challenges
const getGrade = (number) => {
  if (number >= 90) {
    return "A";
  } else if (number >= 80) {
    return "B";
  } else if (number >= 70) {
    return "C";
  } else if (number >= 60) {
    return "D";
  } else if (number < 60) {
    return "F";
  }
};

console.log(getGrade(Math.floor(Math.random() * 100 + 1)));

const prioritize = (urgent, important) => {
  if (urgent && important) {
    return 1;
  } else if (!urgent && important) {
    return 2;
  } else if (urgent && !important) {
    return 3;
  } else if (!urgent && !important) {
    return 4;
  }
};

console.log(prioritize(true, true));

const calculatePay = (wage, hours) => {
  if (hours <= 40) {
    return wage * hours;
  } else {
    const overtimeHours = hours - 40;
    const overtimePay = overtimeHours * (wage * 1.5);
    const regularPay = wage * (hours - overtimeHours);
    return regularPay + overtimePay;
  }
};

console.log(calculatePay(10, 50));
