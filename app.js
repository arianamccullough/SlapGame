let character = {
  name: 'The Beast',
  hp: 100,
  rounds: 1,
  status: [0, 200],
  images: 'https://ubisafe.org/images/explosions-transparent-pixelated-3.gif'
};

function reset(rst) {
  character.hp = rst
  character.hp = 100
  document.getElementById('hp').innerText = character.hp.toString()
};

function attack(dmg) {
  if (character.hp - dmg > 0) {
    character.hp -= dmg,
      document.getElementById('hp').innerText = character.hp.toString()
  }
  else {
    alert('You have defeated The Beast! You Escaped!')
  }
};


/*
function round() {
  character.rounds += 1;
  document.getElementById("round").innerHTML = character.rounds.toString();
};
function hitCount(num) {
  if (character.hits - num > 0) {
    character.hits += num,
      document.getElementById('hits').innerText = character.hits.toString()
  }
  function tko() {
    if (character.hp == 0) {
      document.getElementById('beastPic').innerHTML = <img src='${character.images[character.status[0]]}' />
    }
    tko()
  }
  */

function modifier(cure) {
  if (character.hp + cure < 200) {
    character.hp += cure
    document.getElementById('hp').innerText = character.hp.toString()
  }
  else {
    alert('You have appeased The Beast! You Escaped!')
  }
}

