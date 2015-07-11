import Ember from "ember";

export default Ember.Mixin.create({
  classNameBindings: ["classNameModifiers"],
  mod: false,
  classNameModifiers: Ember.computed("mod", function() {
    if (!this.get("_modPrefix") && this.get("mod")) return console.error(
      "You need to include a _modPrefix property in your component"
    );
    if (!this.get("mod") || !this.get("_modPrefix")) return false;

    let generateModifierName = mod => `${this.get("_modPrefix")}--${mod}`;
    let modSplit = this.get("mod").split(" ");

    return modSplit.map(generateModifierName).join(" ");
  })
});
