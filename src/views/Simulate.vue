<template>
  <div class="container">
    <div id="simulate">

      <Panel title="Attributes">
        <div class="row">
          <!-- Main stats -->
          <div class="col">
            <div class="input-group">
              <label for="">Strength</label>
              <input type="number" v-model.number="engine.Stats.strength">
            </div>
            <div class="input-group">
              <label for="">Dexterity</label>
              <input type="number" v-model.number="engine.Stats.dexterity">
            </div>
            <div class="input-group">
              <label for="">Intelligence</label>
              <input type="number" v-model.number="engine.Stats.intelligence">
            </div>
            <div class="input-group">
              <label for="">Mind</label>
              <input type="number" v-model.number="engine.Stats.mind">
            </div>
          </div>
          <!-- Damage stats -->
          <div class="col">
            <div class="input-group">
              <label for="">Critical Hit</label>
              <input type="number" v-model.number="engine.Stats.criticalHit">
            </div>
            <div class="input-group">
              <label for="">Determination</label>
              <input type="number" v-model.number="engine.Stats.determination">
            </div>
            <div class="input-group">
              <label for="">Direct Hit Rate</label>
              <input type="number" v-model.number="engine.Stats.directHitRate">
            </div>
            <div class="input-group">
              <label for="">Skill Speed</label>
              <input type="number" v-model.number="engine.Stats.skillSpeed">
            </div>
            <div class="input-group">
              <label for="">Spell Speed</label>
              <input type="number" v-model.number="engine.Stats.spellSpeed">
            </div>
          </div>
          <!-- Weapon stats -->
          <div class="col">
            <div class="input-group">
              <label for="">Weapon Physical Damage</label>
              <input type="number" v-model.number="engine.Stats.weaponPhysicalDamage">
            </div>
            <div class="input-group">
              <label for="">Weapon Auto-Attack</label>
              <input type="number" v-model.number="engine.Stats.weaponAutoAttack" step=".01">
            </div>
            <div class="input-group">
              <label for="">Weapon Delay</label>
              <input type="number" v-model.number="engine.Stats.weaponDelay" step=".01">
            </div>
          </div>
        </div>
      </Panel>

      <div class="start">
        <div class="btn" @click="simulate">Start Simulation</div>
      </div>

    </div>
  </div>
</template>

<script>
import { Engine } from "../Engine";

export default {
  name: "Simulate",
  data() {
    return {
      engine: new Engine()
    };
  },
  methods: {
    simulate() {
      this.engine.start();
    }
  }
}
</script>

<style lang="scss" scoped>
#simulate {
  padding-top: 20px;
}
.panel {
  margin-bottom: 20px;
}
.row {
  display: flex;
  .col {
    flex-grow: 1;
    flex-basis: 0;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}
</style>