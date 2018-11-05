

let character = {
  name: 'The Beast',
  hp: 100,
}

let template = ''
function attack(dmg) {
  if (character.hp - dmg >= 0) {
    character.hp -= dmg
    document.getElementById('hp').innerText = character.hp.toString()
  }
  else {
    return
  }

}
function modifier(cure) {
  character.hp += cure
  document.getElementById('hp').innerText = character.hp.toString()
}

function reset(rst) {
  character.hp = rst
  character.hp = 100
  document.getElementById('hp').innerText = character.hp.toString()

}
