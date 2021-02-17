import { ProxyState } from "../AppState.js";
import { gameService } from "../Services/GameService.js";


// Private section up here 

// function _draw(){
//   document.getElementById('cheese').innerText = ProxyState.cheese
// }

function drawStats(){
  document.getElementById('stats').innerHTML = /*html*/ `
  <h5>Cheese Amount: ${ProxyState.cheese}</h5>
  <h5>Multiplier: ${ProxyState.multiplier}</h5>
  `
}

function upgradeButtons(){
  let buttons = document.getElementById('buttons')
  let template = ''
  for(let upgrade in ProxyState.upgrades){
    let choice = ProxyState.upgrades[upgrade]
    console.log(choice);
    template += /*html*/ `
    <button class="btn btn-danger" onclick="app.gameController.purchaseUpgrades('${choice.name}')">${choice.name}</button>
    `
  }
  buttons.innerHTML = template
}



export default class GameController {
  // public down here 
  
  constructor(){
    ProxyState.on("cheese", drawStats)
    ProxyState.on('multiplier', drawStats)
    drawStats()
    // _draw()
    upgradeButtons()
  }

  // put class methods down here
  mine(){
    gameService.mine()
  }

  purchaseUpgrades(input){
    gameService.purchaseUpgrades(input)
  }

  // buyKnife(){
  //   gameService.buyKnife()
  // }

  // buyPickaxe(){
  //   gameService.buyPickaxe()
  // }

  // buyDrill(){
  //   gameService.buyDrill()
  // }

}