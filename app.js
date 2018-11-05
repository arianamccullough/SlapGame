let character = {
  name: 'The Beast',
  hp: 100,
  rounds: 1,
  status: [0, 200],
  images: ['https://ubisafe.org/images/explosions-transparent-pixelated-3.gif', "https://i.gifer.com/4b7P.gif"]
};

function reset(rst) {
  character.hp = rst
  character.hp = 100
  document.getElementById('hp').innerText = character.hp.toString()
  document.getElementById('beastPic').innerHTML = `<img src ='${character.images[1]}'>`
};

function attack(dmg) {
  if (character.hp - dmg >= 0) {
    character.hp -= dmg,
      document.getElementById('hp').innerText = character.hp.toString()
  }
  else {
    alert('You have defeated The Beast! You Escaped!')
  }
  tko()
};

function tko() {
  if (character.hp == 0) {
    document.getElementById('beastPic').innerHTML = `<img src='${character.images[character.status[0]]}' />`
  }
}

function modifier(cure) {
  if (character.hp + cure < 200) {
    character.hp += cure
    document.getElementById('hp').innerText = character.hp.toString()
  }
  else {
    alert('You have appeased The Beast! You Escaped!')
  }
}