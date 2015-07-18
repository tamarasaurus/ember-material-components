import Ember from 'ember';

export default Ember.Mixin.create({
  classNameBindings: ["colorModifier"],
  colorModifier: Ember.computed("color", function() {
    let color = this.get("color");
    if (!color) {
      return;
    }
    let colorName = `mdl-color--${color}`;
    return colorName;
  })
});
