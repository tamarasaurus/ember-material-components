import Ember from "ember";
import layout from "../templates/components/mdl-button";
import Bem from "../mixins/bem-modifiers";
import Color from "../mixins/color";

export default Ember.Component.extend(Bem, Color, {
  layout: layout,
  tagName: "button",
  classNames: ["mdl-button"],
  classNameBindings: ["js:mdl-js-button", "ripple:mdl-js-ripple-effect"],
  attributeBindings: ["disabled:disabled"],
  js: false,
  _modPrefix: "mdl-button"
});
