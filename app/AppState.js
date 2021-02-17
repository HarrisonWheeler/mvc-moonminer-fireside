import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  cheese = 0
  multiplier = 0

  upgrades = {
    knife: {
      name: 'knife',
      price: 15,
      quantity: 0,
      multiplier: 5,
    },
    pickaxe: {
      name: 'pickaxe',
      price: 50,
      quantity: 0,
      multiplier: 15,
    },
    drill: {
      name: 'drill',
      price: 100,
      quantity: 0,
      multiplier: 100,
    },
    blah: {
      name: "harrison",
      price: 0
    },
    ashley:{
      name: "ashley"
    }
  }
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
