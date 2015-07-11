import Ember from 'ember';
import ColorMixin from '../../../mixins/color';
import { module, test } from 'qunit';

module('Unit | Mixin | color');

// Replace this with your real tests.
test('it works', function(assert) {
  var ColorObject = Ember.Object.extend(ColorMixin);
  var subject = ColorObject.create();
  assert.ok(subject);
});
