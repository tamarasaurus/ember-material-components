import Ember from 'ember';
import layout from '../templates/components/mdl-type';
import Bem from "../mixins/bem-modifiers";
import Color from "../mixins/color";

export default Ember.Component.extend(Bem, Color, {
  layout: layout,
  classNames: ["mdl-typography"],
  _modPrefix: "mdl-typography"
});
