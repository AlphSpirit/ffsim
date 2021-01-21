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

  public start() {
    // Get base damage
    let d1 = Math.floor(Math.floor(Math.floor(250 * this.stats.AttackDamage * this.stats.DeterminationDamage) / 100) / 1000);
    // Multiply by weapon damage
    let d2 = Math.floor(Math.floor(Math.floor(Math.floor(d1 * this.stats.WeaponDamage) / 100) * 120) / 100);
    // Add crit and direct hit damage
    let d3 = Math.floor(Math.floor(Math.floor(Math.floor(d2 * this.stats.CriticalHitDamage) / 1000) * 125) / 100);
    // Add random range on damage
    let d4 = Math.floor(Math.floor(d3 * (Math.floor(Math.random() * 10) + 95)) / 100);
    console.log(d4);
  }

}