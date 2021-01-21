export class Stats {

  public strength = 305;
  public dexterity = 5388;
  public intelligence = 291;
  public mind = 275;
  public criticalHit = 3828;
  public determination = 2016;
  public directHitRate = 2671;
  public skillSpeed = 766;
  public spellSpeed = 380;
  public weaponPhysicalDamage = 130;
  public weaponAutoAttack = 131.73;
  public weaponDelay = 3.04;

  get SpeedMultiplier() {
    return 1000 / Math.floor(130 * (this.skillSpeed - 380) / 3300 + 1000);
  }

  get GCD() {
    return Math.floor(2.5 * this.SpeedMultiplier * 100) / 100;
  }

  get CriticalHitChance() {
    return Math.floor(200 * (this.criticalHit - 380) / 3300 + 50) / 10;
  }

  get CriticalHitDamage() {
    return Math.floor(200 * (this.criticalHit - 380) / 3300 + 1400);
  }

  get DeterminationDamage() {
    return Math.floor(130 * (this.determination - 340) / 3300 + 1000);
  }

  get DirectHitChance() {
    return Math.floor(550 * (this.directHitRate - 380) / 3300) / 10;
  }

  get DirectHitDamage() {
    return 1.25;
  }

  get AttackDamage() {
    return Math.floor(165 * (this.dexterity - 340) / 340) + 100;
  }

  get WeaponDamage() {
    return Math.floor(340 * 115 / 1000 + this.weaponPhysicalDamage);
  }

}