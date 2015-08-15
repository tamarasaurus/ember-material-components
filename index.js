/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-material-components',
  included: function(app) {
    this._super.included(app);
    console.log(app.bowerDirectory);
    app.import(app.bowerDirectory + '/material-design-lite/material.min.js');
    app.import(app.bowerDirectory + '/material-design-lite/material.css');
  }
};

