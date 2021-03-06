import Ember from 'ember';
import layout from '../templates/components/mdl-checkbox';

export default Ember.Component.extend({
  layout: layout,
  classNames: ["mdl-checkbox", "mdl-js-checkbox", "mdl-js-ripple-effect", "is-upgraded", "mdl-js-ripple-effect--ignore-events"],
  classNameBindings: ["checked:is-checked"],
  tagName: "label",
  attributeBindings: ["for"],
  for: Ember.computed.alias("type"),
  checked: false
});
