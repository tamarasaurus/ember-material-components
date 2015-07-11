import Ember from 'ember';
import BemModifiersMixin from '../../../mixins/bem-modifiers';
import { module, test } from 'qunit';

module('Unit | Mixin | bem modifiers');

// Replace this with your real tests.
test('it works', function(assert) {
  var BemModifiersObject = Ember.Object.extend(BemModifiersMixin);
  var subject = BemModifiersObject.create();
  assert.ok(subject);
});
