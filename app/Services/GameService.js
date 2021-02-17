import { ProxyState } from "../AppState.js"


class GameService {

  mine(){
    ProxyState.cheese++
    ProxyState.cheese += ProxyState.multiplier
  }

  purchaseUpgrades(input){
    let upgrade = ProxyState.upgrades[input]
    if(upgrade.price <= ProxyState.cheese){
      ProxyState.cheese -= upgrade.price
      ProxyState.multiplier += upgrade.multiplier
      upgrade.quantity++
      upgrade.price += upgrade.price
    } else {
      alert("bro you need more cheese")
    }
  }

  // buyKnife(){
  //   console.log("yo from the servaaaccee");
  //   if(ProxyState.cheese >= ProxyState.upgrades.knife.price){
  //     ProxyState.cheese -= ProxyState.upgrades.knife.price
  //     ProxyState.multiplier += ProxyState.upgrades.knife.multiplier
  //     ProxyState.upgrades.knife.quantity++
  //     ProxyState.upgrades.knife.price += ProxyState.upgrades.knife.price
  //   } else {
  //     alert("You aint got the cheddah")
  //   }
  // }

  // buyPickaxe(){
  //   if(ProxyState.cheese >= ProxyState.upgrades.pickaxe.price){
  //     ProxyState.cheese -= ProxyState.upgrades.pickaxe.price
  //     ProxyState.multiplier += ProxyState.upgrades.pickaxe.multiplier
  //     ProxyState.upgrades.pickaxe.quantity++
  //     ProxyState.upgrades.pickaxe.price += ProxyState.upgrades.pickaxe.price
  //   } else {
  //     alert("You aint got the cheddah")
  //   }
  // }

  // buyDrill(){
  //   if(ProxyState.cheese >= ProxyState.upgrades.drill.price){
  //     ProxyState.cheese -= ProxyState.upgrades.drill.price
  //     ProxyState.multiplier += ProxyState.upgrades.drill.multiplier
  //     ProxyState.upgrades.drill.quantity++
  //     ProxyState.upgrades.drill.price += ProxyState.upgrades.drill.price
  //   } else {
  //     alert("You aint got the cheddah")
  //   }
  // }
}

export const gameService = new GameService()