import { Stats } from "./Stats";

export class Engine {

  private test = "allo!";
  private stats = new Stats();

  constructor() {
    console.log(this.test);
  }

  get Stats() {
    return this.stats;
  }

}