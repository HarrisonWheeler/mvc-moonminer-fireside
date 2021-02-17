import GameController from "./Controllers/GameController.js";
import ValuesController from "./Controllers/ValuesController.js";


// this is where we will register/instantiate any new controllers that we create

// lets register our controller here to demonstrate again how this is done

class App {
  valuesController = new ValuesController();
  gameController = new GameController()
}

window["app"] = new App();
